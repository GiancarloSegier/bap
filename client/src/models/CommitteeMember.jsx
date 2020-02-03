import { decorate, observable, computed, action } from "mobx";

class CommitteeMember {
  constructor(id, name, surname, job, committeeId, avatarUrl, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.job = job;
    this.committeeId = committeeId;
    this.avatarUrl = avatarUrl;
    this.email = email;
    this.phone = phone;
  }

  get values() {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      job: this.job,
      committeeId: this.committeeId,
      avatarUrl: this.avatarUrl,
      email: this.email,
      phone: this.phone
    };
  }

  setId = id => (this.id = id);
  setName = name => (this.name = name);
  setSurname = surname => (this.surname = surname);
  setJob = job => (this.job = job);
  setCommitteeId = committeeId => (this.committeeId = committeeId);
  setAvatarUrl = avatarUrl => (this.avatarUrl = avatarUrl);
  setEmail = email => (this.email = email);
  setPhone = phone => (this.phone = phone);

  updateFromServer = values => {
    this.setId(values._id);
    this.setName(values.name);
    this.setSurname(values.surname);
    this.setJob(values.job);
    this.setCommitteeId(values.committeeId);
    this.setAvatarUrl(values.avatarUrl);
    this.setEmail(values.email);
    this.setPhone(values.phone);
  };
}

decorate(CommitteeMember, {
  id: observable,
  setId: action,
  setName: action,
  setSurname: action,
  setJob: action,
  setCommitteeId: action,
  setAvatarUrl: action,
  setEmail: action,
  setPhone: action,
  values: computed
});

export default CommitteeMember;
