class Task {
    constructor(name, priority, state) {
        this._name = name;
        this._priority = priority;
        this._state = state;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }
}
