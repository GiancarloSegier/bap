import React, { Component } from "react";
import modalStyles from "../../styles/modal.module.css";
import styles from "./Warning.module.css";
import FontAwesome from "react-fontawesome";
class Warning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      undoCheck: false
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ fadeIn: true });
    }, 100);
  };

  onCancel = () => {
    this.setState({ fadeIn: false });
    this.props.onCancel();
  };

  onContinue = () => {
    this.setState({ fadeIn: false });
    setTimeout(() => {
      this.props.onContinue();
    }, 100);
  };

  render() {
    const { message } = this.props;
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
            styles.warning +
            " " +
            (fadeIn ? modalStyles.fadeIn : null)
          }
        >
          <div className={styles.modalContainer}>
            <p>
              <FontAwesome name="trash" className={styles.trash} />
              {message}
            </p>
          </div>

          <div
            className={
              modalStyles.modalContainer +
              " " +
              modalStyles.divideBorder +
              " " +
              styles.buttons
            }
          >
            <button
              className={styles.button + " " + styles.accept}
              onClick={this.onCancel}
            >
              Cancel
            </button>
            <button
              className={styles.button + " " + styles.decline}
              onClick={this.onContinue}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Warning;
