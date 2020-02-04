const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: "htpp://localhost:3000"
  })
);

app.get("/", (_req, res) => {
  res.json({
    message: "Hello World"
  });
});

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((error, _req, res, _next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack:
      process.env.NODE_ENV === "production" ? "Not in production" : error.stack
  });
});

//create a server object:

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log("listening on port 1337");
});
