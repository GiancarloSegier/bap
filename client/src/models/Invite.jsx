import uuid from "uuid";
import { decorate, observable, computed, action } from "mobx";

class Invite {
  constructor(id, name, surname, email, job, committeeId) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.job = job;
    this.committeeId = committeeId;
  }

  get values() {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email,
      job: this.job,
      committeeId: this.committeeId
    };
  }

  setId = id => (this.id = id);
  setName = name => (this.name = name);
  setSurname = surname => (this.surname = surname);
  setEmail = email => (this.email = email);
  setJob = job => (this.job = job);
  setCommitteeId = committeeId => (this.committeeId = committeeId);

  updateFromServer = values => {
    console.log(values);
    this.setId(values._id);
    this.setName(values.name);
    this.setSurname(values.surname);
    this.setEmail(values.email);
    this.setJob(values.job);
    this.setCommitteeId(values.committeeId);
  };
}

decorate(Invite, {
  id: observable,
  setId: action,
  setName: action,
  setSurname: action,
  setEmail: action,
  setJob: action,
  setCommitteeId: action,
  values: computed
});

export default Invite;
