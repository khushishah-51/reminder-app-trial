// Task Routes (routes/taskRoutes.js)

import express from "express";
import * as taskController from "../controller/taskController.js";

const router = express.Router();

  router.post("/tasks", async (req, res) => {
    try {
        console.log(req.body.title);
        const tasks = await taskController.createTask(req, res);
        res.json(tasks);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get("/tasks", (req, res) => {
  res.render('index');
});

router.get("/", async (req, res) => {
  try {
    const tasks = await taskController.getScheduledTasks();
    const formattedTasks = tasks.map(task => {
      return {
        _id: task._id.toString(), // Convert ObjectID to string
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        isCompleted: task.isCompleted
      };
    });
    console.log("Fetched tasks:", tasks); 
    res.render('task', { title: 'Home', tasks: formattedTasks });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).send('Internal Server Error');
  }
});

  router.put("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await taskController.updateTask(id, req, res);
        if (!updatedTask) {
            return res.status(404).send('Task not found');
        }
        res.render('layouts/main', { title: 'Home', tasks: [updatedTask] });
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get("/tasks/:id", (req, res) => {
  res.render('edit');
});

router.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await taskController.deleteTask(id);
    if (!deletedTask) {
      return res.status(404).send('Task not found');
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;






