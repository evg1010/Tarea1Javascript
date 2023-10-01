import {Task} from "./Task.js";

// Project class with encapsulated tasks and methods to process them.
export class Project {
    constructor() {
        // Use Map to find tasks by ID for editing or deleting
        let _tasks = new Map();
        let _nextTaskId = 0; // To generate unique IDs for tasks

        // Private method to check if a task exists
        function checkTaskExists(id) {
            if (!_tasks.has(id)) {
                throw new Error(`No task with ID "${id}" found.`);
            }
        }

        this.getTasks = () => _tasks;

        this.addTask = function (name, priority, status) {
            let newTask = new Task(_nextTaskId++, name, priority, status);
            _tasks.set(newTask.getId(), newTask);
        }

        this.editTask = function (id, newName, newPriority, newStatus) {
            checkTaskExists(id);
            let task = _tasks.get(id);
            task.setName(newName);
            task.setPriority(newPriority);
            task.setStatus(newStatus);
        }

        this.deleteTask = function (id) {
            checkTaskExists(id);
            _tasks.delete(id);
        }

        this.getPendingTasks = function () {
            // List all pending tasks and sort them by priority
            let pendingTasks = Array.from(_tasks.values()).filter(task => task.getStatus() === 'pending');
            pendingTasks.sort((a, b) => b.getPriority() - a.getPriority());

            return pendingTasks;
        }
    }
}
