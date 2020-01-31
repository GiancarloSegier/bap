import React, { Component } from "react";
import styles from "./Request.module.css";
import { observer, inject } from "mobx-react";
import Alert from "../../ui/Alert";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants";

import modalStyles from "../../../styles/modal.module.css";

import uiStyles from "../../../styles/ui.module.css";
import FontAwesome from "react-fontawesome";

class RequestInfo extends Component {
  messageParts = [];
  constructor(props) {
    super(props);
    this.state = {};
  }

  approveRequest = request => {
    console.log(request);
    this.props.onUpdateRequest(this.props.request);
  };

  declineRequest = e => {
    console.log(e);
    console.log("decline");
  };

  render() {
    const { request, messageParts } = this.props;

    return (
      <article className={modalStyles.modal + " " + styles.extraMargin}>
        <div className={modalStyles.modalContainer}>
          <div className={styles.oneLine}>
            <h2 className={styles.requestTitle}>
              {request.name} {request.surname}
            </h2>
            <FontAwesome name="trash" className={styles.trash} />
          </div>
          <div className={styles.messageBlock}>
            <p className={styles.organisationBig}>{request.organisation}</p>
            {messageParts.map(part => (
              <p className={styles.body}>{part}</p>
            ))}
          </div>
          <div className={styles.contactBox}>
            <p className={styles.body + " " + styles.contact}>
              <FontAwesome
                name="envelope"
                className={uiStyles.purpleIcon}
                onClick={this.declineRequest}
              />
              {request.email}
            </p>
            <p className={styles.body + " " + styles.contact}>
              <FontAwesome name="phone" className={uiStyles.purpleIcon} />
              {request.phone}
            </p>
          </div>
        </div>
        <div
          className={
            modalStyles.modalContainer +
            " " +
            modalStyles.divideBorder +
            " " +
            uiStyles.buttons
          }
        >
          {request.pending ? null : (
            <button
              type="button"
              className={uiStyles.textButton}
              onClick={() => this.approveRequest(request)}
            >
              <span className={uiStyles.button__icon}>+</span>invite committee
            </button>
          )}
          <a
            href={`mailto:${request.email}`}
            className={uiStyles.textButton + " " + uiStyles.purple}
          >
            <FontAwesome name="reply" className={uiStyles.purpleIcon} /> reply
            with email
          </a>
        </div>
      </article>
    );
  }
}

export default RequestInfo;