import { decorate, observable, configure, action, runInAction } from "mobx";
import Invite from "../models/Invite";
import Api from "../api";

configure({ enforceActions: `observed` });

class InviteStore {
  invites = [];
  currentInvite = {};
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`invites`);
    this.getAll();
    console.log(this.invites);
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addInvite));
  };

  getOne = id => {
    this.api.getOne(id).then(d => {
      if (d !== null) {
        this._getCurrentInvite(d);
      }
    });
  };

  addInvite = data => {
    const newInvite = new Invite();
    newInvite.updateFromServer(data);
    this.invites.push(newInvite);

    this.api
      .create(newInvite)
      .then(inviteValues => newInvite.updateFromServer(inviteValues));
  };

  _addInvite = values => {
    const invite = new Invite();
    invite.updateFromServer(values);
    runInAction(() => {
      this.invites.push(invite);
    });
  };

  _getCurrentInvite = values => {
    const invite = new Invite();
    invite.updateFromServer(values);
    runInAction(() => {
      this.currentInvite = invite;
    });
    console.log(values);
  };

  deleteInvite = invite => {
    this.invites.remove(invite);
    this.api.delete(invite);
  };
}

decorate(InviteStore, {
  invites: observable,
  addInvite: action,
  deleteInvite: action,
  getOne: action,
  currentInvite: observable
});

export default InviteStore;
