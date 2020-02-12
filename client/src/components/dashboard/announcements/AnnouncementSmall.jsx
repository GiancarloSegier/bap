import React, { Component } from "react";
import styles from "./Announcement.module.css";
import FontAwesome from "react-fontawesome";

class AnnouncementSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getDate();
  }

  getDate() {
    const requestDate = new Date(this.props.announcement.updatedAt);
    const day = requestDate.getDate();
    const month = requestDate.getMonth() + 1;
    const year = requestDate.getFullYear();

    const dateString = `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;

    this.setState({ dateString: dateString });
  }
  onView = () => {
    this.props.onView();
  };

  render() {
    const { announcement } = this.props;

    return (
      <div
        onClick={this.onView}
        className={styles.masonryBlock + " " + styles.hover}
      >
        <article className={styles.card + " " + styles.grow}>
          <div className={styles.container}>
            <div className={styles.gridHeader}>
              <h2 className={styles.title}>{announcement.title}</h2>
              <div className={styles.icons_top}>
                {announcement.images.length > 0 ? (
                  <FontAwesome className={styles.icon_small} name="photo" />
                ) : null}
                {announcement.attachment.length === 1 ? (
                  <FontAwesome className={styles.icon_small} name="paperclip" />
                ) : null}
              </div>
            </div>
            <p className={styles.date}>{this.state.dateString}</p>
            <p className={styles.content}>{announcement.content}</p>
            <button
              type="button"
              className={styles.readmore}
              onClick={this.onView}
            >
              read more
            </button>
            {/* {announcement.images.length > 0 ? (
              
            ) : null} */}
            {/* {announcement.attachment && announcement.attachment.length > 0 ? (
              <a className={styles.icon_button} href={announcement.attachment}>
                <FontAwesome
                  name="paperclip"
                  className={styles.paperclip_icon}
                />
              </a>
            ) : null} */}
          </div>
        </article>
      </div>
    );
  }
}
export default AnnouncementSmall;
