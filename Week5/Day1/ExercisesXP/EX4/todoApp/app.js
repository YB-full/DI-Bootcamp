import { TodoList } from "./todo.js";
const myTask= new TodoList();

myTask.addTask("Delete");
myTask.addTask("Update");
myTask.addTask("Create");


myTask.taskCompleted("Create");
myTask.taskCompleted("Delete");

myTask.listTasks();