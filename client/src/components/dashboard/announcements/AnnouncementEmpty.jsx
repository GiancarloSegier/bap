import React, { Component } from "react";
import styles from "../../../styles/empty.module.css";
import typoStyles from "../../../styles/typo.module.css";
import AnnouncementForm from "../../ui/AnnouncementForm";

class AnnouncementEmpty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNews: false
    };
  }

  openForm = e => {
    this.setState({ addNews: true });
  };
  closeForm = () => {
    this.setState({ addNews: false, detail: false });
  };

  render() {
    const { addNews } = this.state;
    return (
      <>
        {addNews ? <AnnouncementForm onConfirm={this.closeForm} /> : null}
        <div className={styles.container}>
          <div className={styles.overlay}></div>
          <div className={styles.backgroundEmptyAnnouncements}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
          </div>

          <div className={styles.committeeEmptyContainer}>
            <img
              src="../../assets/empty_announcements.png"
              className={styles.emptyImage}
              alt="Location"
            />
            <p className={typoStyles.body}>
              Looks kind of empty
              <br /> here, you can create an anouncement to <br />
              update or inspire other committees.
            </p>
            <button className={typoStyles.buttonInline} onClick={this.openForm}>
              Create your first announcement
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default AnnouncementEmpty;
