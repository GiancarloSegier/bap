import { decorate, observable, configure, action, runInAction } from "mobx";

import Api from "../api";
import Task from "../models/Task";

configure({ enforceActions: `observed` });

class TaskStore {
  tasks = [];
  periodTasks = [];
  periods = [];
  myPeriods = [];
  myTasks = [];
  allUserTasks = [];
  userPeriodTasks = [];
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

  getAllUserTasks = user => {
    this.allUserTasks = [];
    this.api.getAll().then(d =>
      d
        .filter(a => a.assignees.some(b => b.job === user.job.assignment))
        .sort((a, b) => b.period.max - a.period.max)
        .forEach(this._addAllUserTask)
    );
  };

  getUserPeriodTasks = pickedPeriod => {
    this.userPeriodTasks = [];
    this.allUserTasks
      .filter(a => a.period.term === pickedPeriod)
      .forEach(this._addUserPeriodTask);
  };

  _addUserPeriodTask = values => {
    const task = new Task();
    task.updateFromServer(values);
    runInAction(() => {
      this.userPeriodTasks.push(task);
    });
  };

  _addAllUserTask = values => {
    const task = new Task();
    task.updateFromServer(values);
    runInAction(() => {
      this.allUserTasks.push(task);
      if (
        !this.myPeriods.some(a => a.term === values.period.term) &&
        values.period
      ) {
        this.myPeriods.push(values.period);
      }
    });
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
  allUserTasks: observable,
  tasks: observable,
  periods: observable,
  myPeriods: observable,
  myTasks: observable,
  periodTasks: observable,
  getPeriodTasks: action,
  getUserPeriodTasks: action,
  userPeriodTasks: observable,
  getAllUserTasks: action
});

export default TaskStore;
