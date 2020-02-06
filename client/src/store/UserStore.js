import { decorate, observable, action, runInAction } from "mobx";
import Auth from "../api/auth";
import { getUserFromCookie } from "../utils/index.js";
import Api from "../api";
import User from "../models/User";

class UserStore {
  authUser = null;
  privileges = "public";
  users = [];
  memberUsers = [];

  committeeMembers = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.authService = new Auth();
    this.api = new Api(`users`);
    this.setUser(getUserFromCookie());
  }

  getAll = () => {
    this.committeeMembers = [];
    this.users = [];
    this.api.getAll().then(d => {
      d.forEach(this._addUser);
      d.forEach(this._addCommitteeMembers);
    });
  };

  _addCommitteeMembers = values => {
    if (
      this.authUser &&
      this.authUser.committeeId &&
      values.committeeId === this.authUser.committeeId
    ) {
      const user = new User();
      user.updateFromServer(values);

      runInAction(() => {
        this.committeeMembers.push(user);
      });
    }
  };

  deleteMemberUsers = members => {
    members.forEach(member => {
      this.api.getOne(member.id).then(d => {
        this._getMember(d);
      });
    });
  };

  _getMember = values => {
    const user = new User();
    user.updateFromServer(values);
    runInAction(() => {
      this.deleteUser(user);
    });
  };

  deleteUser = user => {
    this.users.remove(user);
    this.api.delete(user);
  };

  _addUser = values => {
    const user = new User();
    user.updateFromServer(values);

    runInAction(() => {
      this.users.push(user);
    });
  };

  setUser = value => {
    this.authUser = value;
    if (value !== null) {
      this.privileges = value.job.privileges;
    }
    this.getAll();
  };

  updateUser = async user => {
    console.log(user);
    await this.api
      .update(user)
      .then(userValues => user.updateFromServer(userValues));
    // this.getAll();
  };
  updateCommitteeMembers = (index, user) => {
    this.committeeMembers.splice(index, 1, user);
  };

  login = (email, password) => {
    return this.authService
      .login(email, password)
      .then(() => {
        this.setUser(getUserFromCookie());
        Promise.resolve();
      })
      .catch(() => {
        this.setUser(null);
        Promise.reject();
      });
  };

  register = async (
    name,
    surname,
    email,
    password,
    job,
    phone,
    organisation,
    committeeId,
    avatarUrl
  ) => {
    await this.authService.register(
      name,
      surname,
      email,
      password,
      job,
      phone,
      organisation,
      committeeId,
      avatarUrl
    );
  };

  logout = async () => {
    await this.authService.logout().then(() => this.setUser(null));
  };
}

decorate(UserStore, {
  users: observable,
  getAll: action,
  deleteUser: action,
  deleteMemberUsers: action,
  committeeMembers: observable,
  updateCommitteeMembers: action,
  updateUser: action,
  authUser: observable,
  setUser: action,
  privileges: observable
});

export default UserStore;
