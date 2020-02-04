import React, { Component } from "react";
import { inject, observer } from "mobx-react";
// import styles from "./Announcements.module.css";
// import Form from "../components/Form";
import styles from "../Dashboard.module.css";
import uiStyles from "../../../styles/ui.module.css";
import typoStyles from "../../../styles/typo.module.css";
import AnnouncementForm from "../../../components/ui/AnnouncementForm";
import Announcement from "../../../components/dashboard/announcements/Announcement";
import AnnouncementEmpty from "../../../components/dashboard/announcements/AnnouncementEmpty";
import AnnouncementDetail from "../../../components/ui/AnnouncementDetail";
import AnnouncementEdit from "../../../components/ui/AnnouncementEdit";
class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNews: false,
      detail: false,
      edit: false
    };
  }

  openForm = e => {
    this.setState({ addNews: true });
  };
  closeForm = () => {
    this.setState({ addNews: false, detail: false, edit: false });
  };
  onEdit = () => {
    this.setState({ edit: true });
  };
  onView = () => {
    this.setState({ detail: true });
  };

  render() {
    const { announcements } = this.props.announcementStore;

    const { addNews, detail, edit } = this.state;
    return (
      <>
        {addNews ? <AnnouncementForm onConfirm={this.closeForm} /> : null}
        {detail ? <AnnouncementDetail onClose={this.closeForm} /> : null}
        {edit ? <AnnouncementEdit onConfirm={this.closeForm} /> : null}
        <div className={styles.oneLine}>
          <h1 className={typoStyles.heading1}>Announcements</h1>
          <div>
            <button
              type="button"
              className={uiStyles.textButton + " " + uiStyles.purple}
              onClick={this.openForm}
            >
              <span className={uiStyles.button__icon}>+</span>new announcement
            </button>
          </div>
        </div>
        {announcements.length > 0 ? (
          <section className={styles.postGrid}>
            {announcements.map((announcement, i) => {
              return (
                <Announcement
                  key={i}
                  onView={this.onView}
                  onEdit={this.onEdit}
                  announcement={announcement}
                />
              );
            })}
          </section>
        ) : (
          <AnnouncementEmpty />
        )}
      </>
    );
  }
}

export default inject(`announcementStore`)(observer(Announcements));
