import UserStore from "./UserStore";
import RequestStore from "./RequestStore";
import JobStore from "./JobStore";

class Store {
  constructor() {
    this.userStore = new UserStore(this);
    this.requestStore = new RequestStore(this);
    this.jobStore = new JobStore(this);
  }
}

export default new Store();
