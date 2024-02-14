// scheduledTasks.js

const cron = require("node-cron");
const Task = require("./models/Task");

// Define a cron job to run every midnight (0 0 * * *)
cron.schedule("0 0 * * *", async () => {
  try {
    // Get current date
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Find tasks with due dates equal to today
    const tasksToUpdate = await Task.find({ dueDate: today });

    // Update tasks to move them to the "Today" section
    await Promise.all(
      tasksToUpdate.map(async (task) => {
        task.dueDate = today;
        await task.save();
      })
    );

    console.log("Scheduled tasks updated for today:", tasksToUpdate.length);
  } catch (error) {
    console.error("Error updating scheduled tasks:", error);
  }
});
