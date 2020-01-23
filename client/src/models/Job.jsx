import uuid from "uuid";
import { decorate, observable, computed, action } from "mobx";

class Job {
  constructor(id, assignment, privileges) {
    this.id = id;
    this.assignment = assignment;
    this.privileges = privileges;
  }

  get values() {
    return {
      id: this.id,
      assignment: this.assignment,
      privileges: this.privileges
    };
  }

  setId = id => (this.id = id);
  setJob = assignment => (this.assignment = assignment);
  setPrivileges = privileges => (this.privileges = privileges);

  updateFromServer = values => {
    this.setId(values._id);
    this.setJob(values.assignment);
    this.setPrivileges(values.privileges);
  };
}

decorate(Job, {
  id: observable,
  setId: action,
  setJob: action,
  setPrivileges: action,
  values: computed
});

export default Job;
