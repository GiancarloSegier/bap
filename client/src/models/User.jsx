import { decorate, observable, computed, action } from "mobx";

class Name {
  constructor(
    id,
    name,
    surname,
    email,
    job,
    phone,
    organisation,
    committeeId,
    avatarUrl
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.job = job;
    this.phone = phone;
    this.organisation = organisation;
    this.committeeId = committeeId;
    this.avatarUrl = avatarUrl;
  }

  get values() {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email,
      job: this.job,
      phone: this.phone,
      organisation: this.organisation,
      committeeId: this.committeeId,
      avatarUrl: this.avatarUrl
    };
  }

  setId = id => (this.id = id);
  setName = name => (this.name = name);
  setSurname = surname => (this.surname = surname);
  setEmail = email => (this.email = email);
  setJob = job => (this.job = job);
  setPhone = phone => (this.phone = phone);
  setOrganisation = organisation => (this.organisation = organisation);
  setCommitteeId = committeeId => (this.committeeId = committeeId);
  setAvatarUrl = avatarUrl => (this.avatarUrl = avatarUrl);

  updateFromServer = values => {
    this.setId(values._id);
    this.setName(values.name);
    this.setSurname(values.surname);
    this.setEmail(values.email);
    this.setJob(values.job);
    this.setPhone(values.phone);
    this.setOrganisation(values.organisation);
    this.setCommitteeId(values.committeeId);
    this.setAvatarUrl(values.avatarUrl);
  };
}

decorate(Name, {
  id: observable,
  setId: action,
  setName: action,
  setSurname: action,
  setEmail: action,
  setJob: action,
  setPhone: action,
  setOrganisation: action,
  setCommitteeId: action,
  setAvatarUrl: action,
  values: computed
});

export default Name;
