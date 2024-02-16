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

/*  
app.get("/", (req, res) => {
  res.render('layouts/main', { title: 'Home', tasks: [] });
});

app.get("/tasks/today", async (req, res) => {
  try {
    const tasks = await taskController.getTasksForToday(req, res);
    res.render('layouts/main', { title: 'Home', tasks });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get("/tasks/scheduled", async (req, res) => {
  try {
    const tasks = await taskController.getScheduledTasks(req, res);
    res.render('layouts/main', { title: 'Home', tasks });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).send('Internal Server Error');
  }
});
*/

//6xyxW1my4dZa01tZ
//khushis

//personal account
//"mongodb+srv://khushifshah0102:cey4PouJ2cgNkgLr@cluster0.tipj1a4.mongodb.net/?retryWrites=true&w=majority"