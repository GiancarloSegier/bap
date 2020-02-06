import { decorate, observable, configure, action, runInAction } from "mobx";

import Api from "../api";
import Task from "../models/Task";

configure({ enforceActions: `observed` });

class TaskStore {
  tasks = [];
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`tasks`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addTask));
  };

  _addTask = values => {
    const task = new Task();
    task.updateFromServer(values);
    runInAction(() => {
      this.tasks.push(task);
    });
  };
}

decorate(TaskStore, {
  tasks: observable
});

export default TaskStore;
