import {Project} from "./Project.js";

let myProject = new Project();

myProject.addTask('Task 1', 1, 'pending');
myProject.addTask('Task 2', 2, 'completed');
myProject.addTask('Task 3', 3, 'pending');

console.log('Tasks in my project:');
myProject.getTasks().forEach(task => console.log(task.getName()));

console.log('Pending tasks:');
myProject.showPendingTasks();

myProject.editTask(0, 'New Task 1', 4, 'in progress');
console.log('Pending tasks after editing Task 1:');
myProject.showPendingTasks();

myProject.deleteTask(2);
console.log('Pending tasks after deleting Task 3:');
myProject.showPendingTasks();
