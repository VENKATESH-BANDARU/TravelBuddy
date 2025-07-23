
const successMessage = (data) => {
  let status = "success";
  let statusCode = 200;
  return status, statusCode, data;
};

const createMessage = (data) => {
  let status = "success";
  let statusCode = 201;
  return status, statusCode, data;
};

const failureMessage = (data) => {
  let status = "failed";
  let statusCode = 400;
  return status, statusCode, data;
};

function applyBaseTransform(schema, opts = {}) {
  // Fields you want to hide if present in *this* schema
  const hideCandidates = opts.hide || ["isDeleted", "deletedBy", "deletedAt"];

  // Keep only the ones actually defined on this schema
  const hideFields = hideCandidates.filter((f) => schema.path(f));

  const transform = (doc, ret) => {
    // Add id
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;

    // Drop soft-delete fields (only those present in schema)
    for (const f of hideFields) {
      delete ret[f];
    }

    return ret;
  };

  schema.set("toJSON", { transform });
  schema.set("toObject", { transform });
}

module.exports = {
  successMessage,
  createMessage,
  failureMessage,
  applyBaseTransform,
};
