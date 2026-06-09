const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv").config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log("Requested URL:", req.url);
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);

  const status = err.status || 500;
  const isApiReq =
    req.originalUrl.startsWith("/api") ||
    req.get("accept")?.includes("application/json");

  if (isApiReq) {
    const payload = {
      success: false,
      message: err.message || "Server error",
    };
    if (process.env.NODE_ENV !== "production") {
      // payload.stack = err.stack;
    }
    return res.status(status).json(payload);
  }

  // HTML fallback
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(status);
  return res.render("error");
});

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Travel Buddy',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:6000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
