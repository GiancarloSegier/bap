import UserStore from "./UserStore";
import RequestStore from "./RequestStore";

class Store {
  constructor() {
    this.userStore = new UserStore(this);
    this.requestStore = new RequestStore(this);
  }
}

export default new Store();
