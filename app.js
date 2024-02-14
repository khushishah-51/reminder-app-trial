/*
// App Setup (app.js)

import express from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes";
//import scheduleTask from "./scheduleTask"

const app = express();
const port = 8080;

app.use(express.json())
app.use(taskRoutes);

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
*/

// App Setup (app.js)

import express from "express";
import mongoose from "mongoose";
import path from 'path';
import taskRoutes from "./routes/taskRoutes.js";
import exphbs from 'express-handlebars';
//import { scheduleTask } from "./scheduleTask.js";

const app = express();
const port = 8080;

// Set up Handlebars middleware
const __dirname = path.resolve();
app.engine('hbs', exphbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(taskRoutes);

//const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'views'))); 


mongoose
  .connect(
    "mongodb+srv://khushifshah0102:cey4PouJ2cgNkgLr@cluster0.tipj1a4.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on port " + port);
    });
    console.log("listening....");
    // schedule the task to run every day at 12:00 AM
    //scheduleTask();
  });

app.get("/", (req, res) => {
  res.render('index', { title: 'Home', tasks: [] });
});
