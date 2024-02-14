// App Setup (app.js)

import express from "express";
import mongoose from "mongoose";
//import scheduleTask from "./scheduleTask"

const app = express();
const port = 8080;

mongoose
  .connect(
    "mongodb+srv://khushifshah0102:cey4PouJ2cgNkgLr@cluster0.tipj1a4.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8080);
    console.log("listening....");
    // schedule the task to run every day at 12:00 AM
    //task.scheduleTask();
  });
  

app.get("/", (req, res) => {
  res.send("Hi khushi!");
});

//cey4PouJ2cgNkgLr
//khushifshah0102