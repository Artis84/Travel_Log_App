const express = require("express");

const app = express();

//create a server object:

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log("listening on port 1337");
});
