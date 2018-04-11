// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}
// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

const task1 = newTask("Walk the dog", "Remember to pick up the 💩");
const task2 = newTask("Do your homework", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
