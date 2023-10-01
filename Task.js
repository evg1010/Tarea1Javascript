// Task class with encapsulated properties such as name, priority, and status.
// The status property can only be one of the following values: 'pending', 'in progress', 'completed'.
export class Task {
    constructor(id, name, priority, status) {
        const _id = id;
        let _name = name;
        let _priority = priority;
        let _status = status;

        // Getter and Setter methods for each property
        this.getId = () => _id;
        this.getName = () => _name;
        this.getPriority = () => _priority;
        this.getStatus = () => _status;

        this.setName = (name) => { _name = name; }
        this.setPriority = (priority) => { _priority = priority; }
        this.setStatus = (status) => { _status = status; }
    }
}
