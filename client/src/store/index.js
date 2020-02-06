import UserStore from "./UserStore";
import RequestStore from "./RequestStore";
import JobStore from "./JobStore";
import CommitteeStore from "./CommitteeStore";
import InviteStore from "./InviteStore";
import AnnouncementStore from "./AnnouncementStore";
import TaskStore from "./TaskStore";

class Store {
  constructor() {
    this.userStore = new UserStore(this);
    this.requestStore = new RequestStore(this);
    this.jobStore = new JobStore(this);
    this.committeeStore = new CommitteeStore(this);
    this.inviteStore = new InviteStore(this);
    this.announcementStore = new AnnouncementStore(this);
    this.taskStore = new TaskStore(this);
  }
}

export default new Store();
