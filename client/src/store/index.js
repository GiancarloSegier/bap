import UserStore from "./UserStore";
import RequestStore from "./RequestStore";
import JobStore from "./JobStore";
import CommitteeStore from "./CommitteeStore";
import InviteStore from "./InviteStore";

class Store {
  constructor() {
    this.userStore = new UserStore(this);
    this.requestStore = new RequestStore(this);
    this.jobStore = new JobStore(this);
    this.committeeStore = new CommitteeStore(this);
    this.inviteStore = new InviteStore(this);
  }
}

export default new Store();
