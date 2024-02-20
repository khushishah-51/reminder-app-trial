// Task Controller (controllers/taskController.js)

import Task from "../model/Task.js";

export async function createTask(req, res) {
  try {
    console.log("body",req.body)
    const { title, description, dueDate } = req.body;
    if (!title || !description || !dueDate) {
      return res.status(400).json({ message: "Title, description, and due date are required" });
    }
    const task = await new Task({
      title: title,
      description: description,
      dueDate: dueDate
  });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getScheduledTasks() {
  try {
    const today = new Date();
    const task = await Task.find({ dueDate: { $gte: today } });
    return task;
  } catch (error) {
    console.error("Error fetching scheduled tasks:", error);
    throw error;
  }
}
 
export async function updateTask(id, req, res) {
  try {
    //const { id } = req.params;
    const { title, description, dueDate } = req.body;

    const updatedTask = await Task.findOneAndUpdate(
      { _id: id },
      { title, description, dueDate },
      { new: true }
    );

    if (!updatedTask) {
      return null;
    }

    return updatedTask;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
}

export async function deleteTask(id) {
  try {
    const deletedTask = await Task.findOneAndDelete({ _id: id });
    return deletedTask;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
}


