

// Task Routes (routes/taskRoutes.js)

//router.post("/tasks", taskController.createTask);
//router.get("/tasks/today", taskController.getTasksForToday);
//router.get("/tasks/scheduled", taskController.getScheduledTasks);
//router.put("/tasks/:id", taskController.updateTask);

 /*
  router.get("/tasks/scheduled", async (req, res) => {
    try {
      const tasks = await taskController.getScheduledTasks(req, res);
      res.render('layouts/main', { title: 'Home', tasks });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  */


import express from "express";
import * as taskController from "../controller/taskController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.render('layouts/main', { title: 'Home', tasks : []});
  });
  /*
  router.post("/tasks", async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        const task = new Task({ title, description, dueDate });
        const task = await taskController.createTask(req, res);
        res.render('layouts/main', { title: 'Home', tasks: [task] });
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).send('Internal Server Error');
    }
});
*/

router.post("/tasks", async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        const task = await taskController.createTask({ title, description, dueDate });
        res.render('layouts/main', { title: 'Home', tasks: [task] });
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).send('Internal Server Error');
    }
});


  router.get("/tasks/today", async (req, res) => {
    try {
      const tasks = await taskController.getTasksForToday(req, res);
      res.render('layouts/main', { title: 'Home', tasks });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  router.get("/tasks/scheduled", async (req, res) => {
    try {
      const tasks = await taskController.getScheduledTasks();
      console.log("Fetched tasks:", tasks); 
      //res.render('layouts/main', { title: 'Home', tasks: Object.values(tasks) });
      res.render('layouts/main', { title: 'Home', tasks: tasks.map(task => ({ ...task })) });

    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

  router.put("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await taskController.updateTask(req, res);
        if (!updatedTask) {
            return res.status(404).send('Task not found');
        }
        res.render('layouts/main', { title: 'Home', tasks: [updatedTask] });
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;






