const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config({ path: __dirname + "/.env" });

const middlewares = require("./middlewares");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
});

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
);

app.get("/", (_req, res) => {
  res.json({
    message: "Hello World"
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

//create a server object:

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log("listening on port 1337");
});
