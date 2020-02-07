import { decorate, observable, configure, action, runInAction } from "mobx";

import Api from "../api";
import Task from "../models/Task";

configure({ enforceActions: `observed` });

class TaskStore {
  tasks = [];
  periodTasks = [];
  periods = [];
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
        d
          .filter(a => a.period.term === pickedPeriod)
          .forEach(this._addPeriodTask)
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
      if (
        !this.periods.some(a => a.term === values.period.term) &&
        values.period
      ) {
        this.periods.push(values.period);
      }
    });
  };
}

decorate(TaskStore, {
  tasks: observable,
  periods: observable,
  periodTasks: observable,
  getPeriodTasks: action
});

export default TaskStore;
