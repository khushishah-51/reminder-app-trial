/*
// Task Routes (routes/taskRoutes.js)

const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/tasks", taskController.createTask);
router.get("/tasks/today", taskController.getTasksForToday);
router.get("/tasks/scheduled", taskController.getScheduledTasks);
router.put("/tasks/:id", taskController.updateTask);

//module.exports = router;
export default router;
*/

// Task Routes (routes/taskRoutes.js)

import express from "express";
import * as taskController from "../controller/taskController.js";

const router = express.Router();

router.post("/tasks", taskController.createTask);
router.get("/tasks/today", taskController.getTasksForToday);
router.get("/tasks/scheduled", taskController.getScheduledTasks);
router.put("/tasks/:id", taskController.updateTask);

export default router;



