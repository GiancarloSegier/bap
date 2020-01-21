import UserStore from "./UserStore";

class Store {
  constructor() {
    this.userStore = new UserStore(this);
  }
}

export default new Store();
