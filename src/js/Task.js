import { 
  isLocalDataExist, 
  getLocalData, 
  setLocalData 
} from "./utils/localStorage.js";

class Task {
  constructor(tasks) {
    this.tasks = isLocalDataExist("tasks") 
      ? getLocalData("tasks")
      : tasks;
  }

  add(task) {
    this.tasks = [task, ...this.tasks];
    setLocalData("tasks", this.tasks);
  }

  delete(taskID) {
    this.tasks = this.tasks.filter(task => task.id !== taskID);
    setLocalData("tasks", this.tasks);
  }

  getAllTasks() {
    return this.tasks;
  }

  getCompletedTasks() {
    return this.tasks.filter(task => task.isCompleted).length;
  }

  getTodoTasks() {
    return this.tasks.filter(task => !task.isCompleted).length;
  }
}

export default Task;