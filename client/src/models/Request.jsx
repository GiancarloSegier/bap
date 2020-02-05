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
    createdAt,
    updatedAt
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
    this.updatedAt = updatedAt;
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
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
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
  seteUpdateDate = updatedAt => (this.updatedAt = updatedAt);

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
    this.seteUpdateDate(values.updatedAt);
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
  seteUpdateDate: action,
  values: computed
});

export default Request;
