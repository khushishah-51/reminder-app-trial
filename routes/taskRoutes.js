// Task Routes (routes/taskRoutes.js)

const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/tasks", taskController.createTask);
router.get("/tasks/today", taskController.getTasksForToday);
router.get("/tasks/scheduled", taskController.getScheduledTasks);
router.put("/tasks/:id", taskController.updateTask);

module.exports = router;

// Task Model (models/Task.js)

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: { type: Date, required: true },
  isCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);

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
