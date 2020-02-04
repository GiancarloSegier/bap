import { decorate, observable, configure, action, runInAction } from "mobx";
import Committee from "../models/Committee";
import CommitteeMember from "../models/CommitteeMember";
import Api from "../api";

configure({ enforceActions: `observed` });

class CommitteeStore {
  committees = [];
  countries = [];
  currentCommittee = {};
  committeeMembers = [];
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`committees`);
    this.userApi = new Api(`users`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => {
      d.forEach(this._addCommittee);
    });
  };

  getCommitteeMembers = async committeeId => {
    this.committeeMembers = [];
    await this.userApi.getAll().then(d => {
      d.filter(user => user.committeeId === committeeId).forEach(
        this._addCommitteeMember
      );
    });
  };

  getOne = id => {
    this.api.getOne(id).then(d => {
      this._getCurrentCommittee(d);
    });
  };

  addCommittee = data => {
    console.log(data);
    const newCommittee = new Committee();
    newCommittee.updateFromServer(data);
    this.committees.push(newCommittee);

    this.api
      .create(newCommittee)
      .then(committeeValues => newCommittee.updateFromServer(committeeValues));
  };

  _addCommittee = values => {
    console.log(values);
    const committee = new Committee();
    committee.updateFromServer(values);

    runInAction(() => {
      this.committees.push(committee);
      if (!this.countries.includes(values.country) && values.country) {
        this.countries.push(values.country);
      }
    });
  };
  _addCommitteeMember = values => {
    const member = new CommitteeMember();
    member.updateFromServer(values);
    runInAction(() => {
      this.committeeMembers.push(member);
    });
  };

  _getCurrentCommittee = values => {
    const committee = new Committee();
    committee.updateFromServer(values);
    runInAction(() => {
      this.currentCommittee = committee;
    });
  };

  updateCommittee = committee => {
    this.api
      .update(committee)
      .then(committeeValues => committee.updateFromServer(committeeValues));
  };

  deleteCommittee = committee => {
    this.committees.remove(committee);
    this.api.delete(committee);
  };
}

decorate(CommitteeStore, {
  committees: observable,
  countries: observable,
  addCommittee: action,
  deleteCommittee: action,
  getOne: action,
  getCommitteeMembers: action,
  committeeMembers: observable,
  currentCommittee: observable
});

export default CommitteeStore;
