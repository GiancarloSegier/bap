import React, { Component } from "react";
import styles from "./Request.module.css";
import { observer, inject } from "mobx-react";
import Alert from "../ui/Alert";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      currentRequest: props.currentRequest,
      undo: false
    };
  }

  approveRequest = request => {
    this.props.setParams(true, request, "Invite send", "check");
  };

  undoAction = () => {
    this.setState({ undo: true });
  };

  render() {
    const { currentRequest } = this.props;
    console.log(currentRequest);
    const requestDate = new Date(currentRequest.createdAt);
    const day = requestDate.getDate();
    const month = requestDate.getMonth() + 1;
    const year = requestDate.getFullYear();

    const dateString = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;

    return (
      <>
        <article className={styles.card}>
          <div className={styles.modalContainer}>
            <div className={styles.metaData}>
              {currentRequest.pending ? (
                <p className={styles.status + " " + styles.pending}>Pending</p>
              ) : (
                <p className={styles.status + " " + styles.new}>New</p>
              )}
              <div className={styles.buttons}>
                <button
                  className={styles.request__button + " " + styles.decline}
                  onClick={() => this.approveRequest(currentRequest)}
                >
                  <span className={styles.decliner}></span>
                </button>
                {currentRequest.pending === true ? null : (
                  <button
                    className={styles.request__button + " " + styles.approve}
                    onClick={() => this.approveRequest(currentRequest)}
                  >
                    <span className={styles.checker}></span>
                  </button>
                )}
              </div>
            </div>
            <h2 className={styles.heading2}>
              {currentRequest.name} {currentRequest.surname}
            </h2>
            <div className={styles.subData}>
              <p className={styles.organisation}>
                {currentRequest.organisation}
              </p>
              <p className={styles.date}>{dateString}</p>
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default inject(`requestStore`)(observer(Request));
