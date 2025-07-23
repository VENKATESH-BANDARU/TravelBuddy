const roleModel = require("../../models/roleModel");

const saveRoleService = async (req, res) => {
    const validate = await roleModel.findOne({ roleName: req.body.roleName });
    if (validate) {
        throw new Error("Role already exists");
    }

    const saveData = await new roleModel(req.body).save();
    return saveData;
}

const getAllRolesService = async (req, res) => {
    const roleData = await roleModel.find({ isDeleted: false });
    return roleData;
}

const roleByTabService = async (req, tabName = undefined) => {
  if (req.userTokenInfo.isSuperAdmin) {
    return {
      isAddPermission: true,
      isEditPermission: true,
      isDeletePermission: true,
      isViewPermission: true,
    };
  }

  const permissionData = await roleModel.find({
    roleId: req.userTokenInfo.WrRoleId || null,
    displayType: req.userTokenInfo.WrUserType || null,
    tabName: tabName || req.body.tabName,
  })

  if (!permissionData.length) {
    return {
      isAddPermission: false,
      isEditPermission: false,
      isDeletePermission: false,
      isViewPermission: false,
    };
  } else {
    return permissionData[0];
  }
};

module.exports = {
    saveRoleService,
    getAllRolesService,
    roleByTabService,
}