import React, { Component } from "react";
import styles from "./Alert.module.css";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      undoCheck: false
    };
  }
  componentDidMount() {
    this.setIcon();
    setTimeout(() => {
      this.setState({ fadeIn: true });
    }, 100);
    setTimeout(() => {
      this.setState({ fadeIn: false });
    }, 4800);
    setTimeout(() => {
      this.props.hideAlert();
      if (!this.state.undoCheck) {
        this.onHandleFunction();
      }
    }, 5000);
  }
  setIcon() {
    this.setState({ icon: this.props.icon });
  }

  onClickUndo = e => {
    this.setState({ undoCheck: true });
  };

  onHandleFunction = () => {
    this.props.onFinishAlert(this.props.params);
  };

  render() {
    const { message } = this.props;
    const { icon, fadeIn, undoCheck } = this.state;
    return (
      <div
        className={
          styles.alertBackground + " " + (fadeIn ? styles.fadeBackground : null)
        }
      >
        <div
          className={styles.alertModal + " " + (fadeIn ? styles.fadeIn : null)}
        >
          <span
            className={
              styles[icon] + " " + (!undoCheck ? null : styles.checkIcon)
            }
          ></span>
          <p
            className={
              styles.message + " " + (!undoCheck ? null : styles.checkMessage)
            }
          >
            {message}
          </p>
          <button
            className={
              styles.undo + " " + (undoCheck ? styles.undo__check : null)
            }
            onClick={this.onClickUndo}
          >
            UNDO
          </button>
        </div>
      </div>
    );
  }
}

export default Alert;
