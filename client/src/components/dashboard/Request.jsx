import React, { Component } from "react";
import styles from "./Request.module.css";
import { observer, inject } from "mobx-react";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false, currentRequest: props.currentRequest };
  }

  approveRequest = request => {
    request.setPending(true);
    this.setState({ currentRequest: request });
    this.props.onUpdateRequest(request);
  };

  render() {
    const { currentRequest } = this.props;
    return (
      <>
        <article className={styles.card}>
          <div className={styles.modalContainer}>
            {currentRequest.pending ? (
              <p className={styles.status + " " + styles.pending}>Pending</p>
            ) : (
              <p className={styles.status + " " + styles.new}>New</p>
            )}
            <h2 className={styles.heading2}>
              {currentRequest.name} {currentRequest.surname}
            </h2>
            <p className={styles.organisation}>{currentRequest.organisation}</p>
            {currentRequest.pending === true ? null : (
              <button onClick={() => this.approveRequest(currentRequest)}>
                Approve request
              </button>
            )}
          </div>
        </article>
      </>
    );
  }
}

export default inject(`requestStore`)(observer(Request));
