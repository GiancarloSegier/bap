import { decorate, observable, configure, action, runInAction } from "mobx";
import Committee from "../models/Committee";
import Api from "../api";

configure({ enforceActions: `observed` });

class CommitteeStore {
  committees = [];
  currentCommittee = {};
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`committees`);
    // this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addCommittee));
  };

  getOne = id => {
    this.api.getOne(id).then(d => {
      this._getCurrentCommittee(d);
    });
  };

  addCommittee = data => {
    const newCommittee = new Committee();
    newCommittee.updateFromServer(data);
    this.committees.push(newCommittee);
    console.log(newCommittee);

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
    });
  };

  _getCurrentCommittee = values => {
    console.log(values);
    const committee = new Committee();
    committee.updateFromServer(values);
    runInAction(() => {
      this.currentCommittee = committee;
    });
    console.log(values);
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
  addCommittee: action,
  deleteCommittee: action,
  getOne: action,
  currentCommittee: observable
});

export default CommitteeStore;
