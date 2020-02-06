import { decorate, observable, configure, action, runInAction } from "mobx";

import Api from "../api";
import Task from "../models/Task";

configure({ enforceActions: `observed` });

class TaskStore {
  tasks = [];
  periodTasks = [];
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`tasks`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addTask));
  };

  getPeriodTasks = pickedPeriod => {
    this.periodTasks = [];
    this.api
      .getAll()
      .then(d =>
        d.filter(a => a.period === pickedPeriod).forEach(this._addPeriodTask)
      );
  };
  _addPeriodTask = values => {
    const task = new Task();
    task.updateFromServer(values);
    runInAction(() => {
      this.periodTasks.push(task);
    });
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
  tasks: observable,
  periodTasks: observable,
  getPeriodTasks: action
});

export default TaskStore;
