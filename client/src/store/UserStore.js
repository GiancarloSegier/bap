import { decorate, observable, action } from "mobx";
import Auth from "../api/auth";
import { getUserFromCookie } from "../utils/index.js";

class UserStore {
  authUser = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.authService = new Auth();
    this.setUser(getUserFromCookie());
  }

  setUser = value => {
    console.log(value);
    this.authUser = value;
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

  register = (name, surname, email, pwd, job) =>
    this.authService.register(name, surname, email, pwd, job);

  logout = () => {
    this.authService.logout().then(() => this.setUser(null));
  };
}

decorate(UserStore, { authUser: observable, setUser: action });

export default UserStore;
