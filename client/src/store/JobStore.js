import { decorate, observable, configure, action, runInAction } from "mobx";
import Job from "../models/Job";
import Api from "../api";

configure({ enforceActions: `observed` });
class JobStore {
  jobs = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`jobs`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addJob));
  };

  _addJob = values => {
    const job = new Job();
    job.updateFromServer(values);
    runInAction(() => {
      this.jobs.push(job);
    });
  };
}

decorate(JobStore, {
  jobs: observable
});

export default JobStore;
