import {Project} from "./Project.js";

function addTasksToProject(tasks, project) {
    tasks.forEach(task => project.addTask(task.name, task.priority, task.status));
}

function printTask(task) {
    console.log(`Task: ${task.getName()}, Priority: ${task.getPriority()}, Status: ${task.getStatus()}`);
}

// Create a project, add tasks and process them
let tasks = [
    {name: 'Task 1', priority: 1, status: 'pending'},
    {name: 'Task 2', priority: 2, status: 'completed'},
    {name: 'Task 3', priority: 3, status: 'pending'},
    {name: 'Task 4', priority: 2, status: 'pending'},
    {name: 'Task 5', priority: 1, status: 'in progress'},
    {name: 'Task 6', priority: 1, status: 'pending'}
];
let myProject = new Project();
addTasksToProject(tasks, myProject);

console.log('Tasks in my project:');
myProject.getTasks().forEach(task => printTask(task));

console.log('Pending tasks:');
myProject.getPendingTasks().forEach(task => printTask(task));

myProject.editTask(0, 'New Task 1', 4, 'in progress');
console.log('Pending tasks after editing Task 1:');
myProject.getPendingTasks().forEach(task => printTask(task));

myProject.deleteTask(2);
console.log('Pending tasks after deleting Task 3:');
myProject.getPendingTasks().forEach(task => printTask(task));

console.log('Tasks in my project:');
myProject.getTasks().forEach(task => printTask(task));
