import React, { Component } from "react";
import modalStyles from "../../styles/modal.module.css";
// import formStyles from "../../styles/form.module.css";
// import { inject, observer } from "mobx-react";
// import { withRouter } from "react-router-dom";
import styles from "./modalForm.module.css";

// import ImageUploading from "react-images-uploading";

class AnnouncementEdit extends Component {
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
      this.props.onConfirm();
    }, 200);
  };

  render() {
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
            <div className={styles.oneLine}>
              <h3 className={modalStyles.heading3}>New edit</h3>
              <button
                type="button"
                className={modalStyles.close__button}
                onClick={this.closeForm}
              >
                <span className={modalStyles.decliner}></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnnouncementEdit;
