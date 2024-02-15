/*
// Task Model (models/Task.js)

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: { type: Date, required: true },
  isCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
*/
// Task Model (models/Task.js)

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { String },
  dueDate: { type: Date, required: true },
  isCompleted: { type: Boolean, default: false },
});

export default mongoose.model("Task", taskSchema);

