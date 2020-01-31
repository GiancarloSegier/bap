import React, { Component } from "react";
import styles from "./Warning.module.css";

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
          styles.warningBackground + " " + (fadeIn ? styles.fadeIn : null)
        }
      >
        <div
          className={
            styles.warningModal + " " + (fadeIn ? styles.fadeIn : null)
          }
        >
          <p>Are you sure you want to do this?</p>
          <button onClick={this.onCancel}>Cancel</button>
          <button onClick={this.onContinue}>Continue</button>
        </div>
      </div>
    );
  }
}

export default Warning;
