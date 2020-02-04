import { decorate, observable, configure, action, runInAction } from "mobx";
import Announcement from "../models/Announcement";
import Api from "../api";

configure({ enforceActions: `observed` });

class AnnouncementStore {
  announcements = [];
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`announcements`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addAnnouncement));
  };

  addAnnouncement = data => {
    const newAnnouncement = new Announcement();
    newAnnouncement.updateFromServer(data);
    this.announcements.push(newAnnouncement);

    this.api
      .create(newAnnouncement)
      .then(announcementValues =>
        newAnnouncement.updateFromServer(announcementValues)
      );
  };

  _addAnnouncement = values => {
    const announcement = new Announcement();
    announcement.updateFromServer(values);
    runInAction(() => {
      this.announcements.push(announcement);
    });
  };

  deleteAnnouncement = announcement => {
    this.announcements.remove(announcement);
    this.api.delete(announcement);
  };

  updateAnnouncement = async announcement => {
    console.log(announcement);
    await this.api
      .update(announcement)
      .then(announcementValues =>
        announcement.updateFromServer(announcementValues)
      );
  };
}

decorate(AnnouncementStore, {
  announcements: observable,
  addAnnouncement: action,
  updateAnnouncement: action,
  deleteAnnouncement: action
});

export default AnnouncementStore;
