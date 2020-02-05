import React, { Component } from "react";
import modalStyles from "../../styles/modal.module.css";
// import formStyles from "../../styles/form.module.css";
// import { inject, observer } from "mobx-react";
// import { withRouter } from "react-router-dom";
import formStyles from "./modalForm.module.css";
import styles from "../dashboard/announcements/Announcement.module.css";
import FontAwesome from "react-fontawesome";

// import ImageUploading from "react-images-uploading";

class AnnouncementDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ fadeIn: true });
    }, 100);
  };

  closeForm = e => {
    this.setState({ fadeIn: false });
    setTimeout(() => {
      this.props.onClose();
    }, 200);
  };

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
  render() {
    console.log(this.props.announcement);
    const { announcement } = this.props;
    const { fadeIn } = this.state;
    return (
      <div
        className={
          modalStyles.modalBackground +
          " " +
          (fadeIn ? modalStyles.fadeIn : null)
        }
      >
        <div
          className={
            modalStyles.floatingModal +
            " " +
            modalStyles.biggerModal +
            " " +
            (fadeIn ? modalStyles.fadeIn : null)
          }
        >
          <div className={modalStyles.modalContainer}>
            <div className={formStyles.oneLine}>
              <h3 className={modalStyles.heading3}>{announcement.title}</h3>
              <button
                type="button"
                className={modalStyles.close__button}
                onClick={this.closeForm}
              >
                <span className={modalStyles.decliner}></span>
              </button>
            </div>

            <p className={styles.date}>{this.state.dateString}</p>
            <p className={styles.content_max}>{announcement.content}</p>

            {announcement.images.length > 0 ? (
              <>
                <img
                  className={styles.image}
                  src={announcement.images[0]}
                  alt=""
                />
                <div className={styles.imageContainer}>
                  {announcement.images.slice(1).map((image, i) => {
                    return (
                      <img
                        key={i}
                        className={styles.image_xs}
                        src={image}
                        alt=""
                      />
                    );
                  })}
                </div>
              </>
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
            <div className={styles.icons_bot}>
              <FontAwesome
                className={styles.icon}
                name="share-alt"
                onClick={this.onView}
              />
              <FontAwesome
                className={styles.icon}
                name="trash"
                onClick={this.onView}
              />
              <FontAwesome
                className={styles.icon}
                name="edit"
                onClick={this.onEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnnouncementDetail;
