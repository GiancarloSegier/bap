import React, { Component } from "react";
import styles from "./Request.module.css";
import { observer, inject } from "mobx-react";
import Alert from "../../ui/Alert";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants";
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
    if (this.props.alert) {
      this.props.setParams(true, request, "Invite send", "check");
    } else {
      this.props.onUpdateRequest(request);
    }
  };

  declineRequest = currentRequest => {
    this.props.onDeleteRequest(currentRequest);
  };

  setPickedRequest = request => {
    request.setSeen(true);
    this.props.requestStore.updateRequest(request);
  };

  render() {
    const { currentRequest } = this.props;

    const requestDate = new Date(currentRequest.createdAt);
    const day = requestDate.getDate();
    const month = requestDate.getMonth() + 1;
    const year = requestDate.getFullYear();

    const dateString = `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;

    return (
      <article className={styles.card}>
        <div>
          <div className={styles.metaData + " " + styles.modalContainer}>
            {(currentRequest.seen && currentRequest.pending) ||
            currentRequest.pending ? (
              <p className={styles.status + " " + styles.pending}>Pending</p>
            ) : currentRequest.seen ? (
              <p className={styles.status + " " + styles.seen}>Seen</p>
            ) : (
              <p className={styles.status + " " + styles.new}>New</p>
            )}
            <div className={styles.buttons}>
              <button
                className={styles.request__button + " " + styles.decline}
                onClick={() => this.declineRequest(currentRequest)}
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
          {this.props.link ? (
            <Link
              to={
                !currentRequest.pending
                  ? {
                      pathname: ROUTES.requests,
                      state: { requestId: currentRequest.id }
                    }
                  : ROUTES.invitations
              }
              onClick={() => this.setPickedRequest(currentRequest)}
            >
              <div className={styles.modalContainer}>
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
            </Link>
          ) : (
            <div className={styles.modalContainer}>
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
          )}
        </div>
      </article>
    );
  }
}

export default inject(`requestStore`)(observer(Request));
