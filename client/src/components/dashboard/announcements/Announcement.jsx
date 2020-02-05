import React, { Component } from "react";
import styles from "./Announcement.module.css";
import FontAwesome from "react-fontawesome";

class Announcement extends Component {
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
  onEdit = () => {
    this.props.onEdit();
  };

  render() {
    const { announcement } = this.props;

    return (
      <div className={styles.masonryBlock}>
        <article className={styles.card}>
          <div className={styles.container}>
            <div className={styles.gridHeader}>
              <h2 className={styles.title}>{announcement.title}</h2>
              <div className={styles.icons_top}>
                <FontAwesome
                  className={styles.icon}
                  name="eye"
                  onClick={this.onView}
                />
                <FontAwesome
                  className={styles.icon}
                  name="edit"
                  onClick={this.onEdit}
                />
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
            {announcement.images.length > 0 ? (
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src={announcement.images[0]}
                  alt=""
                  onClick={this.onView}
                />
              </div>
            ) : (
              <p></p>
            )}
            {announcement.attachment.length > 0 ? (
              <a className={styles.attachment} href={announcement.attachment}>
                <FontAwesome
                  name="paperclip"
                  className={styles.paperclip_icon}
                />
              </a>
            ) : (
              <p></p>
            )}
          </div>
        </article>
      </div>
    );
  }
}
export default Announcement;
