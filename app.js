// App Setup (app.js)

import express from "express";
import mongoose from "mongoose";
import path from 'path';
import taskRoutes from "./routes/taskRoutes.js";
import exphbs from 'express-handlebars';
import Handlebars from 'handlebars';
//import { scheduleTask } from "./scheduleTask.js";

const app = express();
const port = 8080;

// Set up Handlebars middleware
const __dirname = path.resolve();
const hbs = exphbs.create({
  extname: '.hbs',
  handlebars: Handlebars.create({
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  })
});

app.engine('hbs', hbs.engine); 

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(taskRoutes);
app.use(express.static(path.join(__dirname, 'views'))); 


mongoose
  .connect(
    "mongodb+srv://khushis:6xyxW1my4dZa01tZ@cluster0.mbkrxjk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on port " + port);
    });
    console.log("listening....");
    // schedule the task to run every day at 12:00 AM
    //scheduleTask();
  });

//6xyxW1my4dZa01tZ
//khushis

//personal account
//"mongodb+srv://khushifshah0102:cey4PouJ2cgNkgLr@cluster0.tipj1a4.mongodb.net/?retryWrites=true&w=majority"