// App Setup (app.js)

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8080;

mongoose
  .connect(
    "mongodb+srv://dbUser:dbUSERPASSWORD@cluster0.qkgmjl5.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(8080))
  .then(() => console.log("listening...."));

scheduledTasks.start();

app.get("/", (req, res) => {
  res.send("Hi khushi!");
});
