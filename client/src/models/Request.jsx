import { decorate, observable, computed, action } from "mobx";

class Request {
  constructor(
    id,
    name,
    surname,
    phone,
    organisation,
    email,
    message,
    job,
    pending,
    seen,
    createdAt
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.organisation = organisation;
    this.email = email;
    this.message = message;
    this.job = job;
    this.pending = pending;
    this.seen = seen;
    this.createdAt = createdAt;
  }

  get values() {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      phone: this.phone,
      organisation: this.organisation,
      email: this.email,
      message: this.message,
      job: this.job,
      pending: this.pending,
      seen: this.seen,
      createdAt: this.createdAt
    };
  }

  setId = id => (this.id = id);
  setName = name => (this.name = name);
  setSurname = surname => (this.surname = surname);
  setPhone = phone => (this.phone = phone);
  setOrganisation = organisation => (this.organisation = organisation);
  setEmail = email => (this.email = email);
  setMessage = message => (this.message = message);
  setJob = job => (this.job = job);
  setPending = pending => (this.pending = pending);
  setSeen = seen => (this.seen = seen);
  setDate = createdAt => (this.createdAt = createdAt);

  updateFromServer = values => {
    this.setId(values._id);
    this.setName(values.name);
    this.setSurname(values.surname);
    this.setPhone(values.phone);
    this.setOrganisation(values.organisation);
    this.setEmail(values.email);
    this.setMessage(values.message);
    this.setJob(values.job);
    this.setPending(values.pending);
    this.setSeen(values.seen);
    this.setDate(values.createdAt);
  };
}

decorate(Request, {
  id: observable,
  setId: action,
  setName: action,
  setSurname: action,
  setOrganisation: action,
  setPhone: action,
  setEmail: action,
  setMessage: action,
  setJob: action,
  setPending: action,
  setSeen: action,
  setDate: action,
  values: computed
});

export default Request;
