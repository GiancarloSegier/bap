import { decorate, observable, action } from "mobx";
import Auth from "../api/auth";
import { getUserFromCookie } from "../utils/index.js";

class UserStore {
  authUser = null;
  privileges = "public";

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.authService = new Auth();
    this.setUser(getUserFromCookie());
  }

  setUser = value => {
    this.authUser = value;
    if (value !== null) {
      this.privileges = value.job.privileges;
    }
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
  authUser: observable,
  setUser: action,
  privileges: observable
});

export default UserStore;
