import React, { Component } from "react";
import styles from "../platform.module.css";
import { inject, observer, PropTypes } from "mobx-react";
import Request from "../../../components/dashboard/requests/Request";

import Loader from "react-loader-spinner";
import { toJS, flow } from "mobx";
import RequestInfo from "../../../components/dashboard/requests/RequestInfo";

const nl2br = require("react-nl2br");

class Requests extends Component {
  fullPickedRequest;
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      pickedRequest: null,
      loading: true
    };
  }

  componentDidMount = async () => {
    setTimeout(() => {
      const { requests } = this.props.requestStore;
      this.setState({
        requests: requests
      });
      this.setPickedRequest();
    }, 500);
    setTimeout(() => {
      this.setState({ loading: false });
    }, 800);
  };

  setPickedRequest = async () => {
    const { requests } = this.props.requestStore;
    let pickedRequest;
    if (this.props.location.state && this.props.location.state.requestId) {
      pickedRequest = toJS(requests).filter(
        request => request.id === this.props.location.state.requestId
      )[0];
    } else {
      pickedRequest = toJS(
        requests
          .slice()
          .sort((a, b) => Number(b.pending) - Number(a.pending))
          .reverse()
      )[0];
    }
    this.fullPickedRequest = pickedRequest;

    this.getMessageParagraphs(pickedRequest);
  };

  onUpdateRequest = async request => {
    let updateRequest;

    if (!request.setPending) {
      updateRequest = this.fullPickedRequest;
    } else {
      updateRequest = request;
    }

    updateRequest.setPending(true);
    await this.props.requestStore.updatePendingRequests(updateRequest);

    const { requests } = this.props.requestStore;

    this.setState({
      requests: requests
    });
    await fetch(
      `http://localhost:4000/send-mail?type=invite&id=${updateRequest.id}&name=${updateRequest.name}&recipient=${updateRequest.email}&organisation=${updateRequest.organisation}`
    ).catch(err => console.log(err));
  };

  onDeleteRequest = async request => {
    let deleteRequest;

    if (!request.setPending) {
      deleteRequest = this.fullPickedRequest;
    } else {
      deleteRequest = request;
    }
    await this.props.requestStore.deleteRequest(deleteRequest);

    const { requests } = this.props.requestStore;

    this.setState({
      requests: requests
    });
  };

  pickRequest = request => {
    this.fullPickedRequest = request;
    this.getMessageParagraphs(request);
  };

  getMessageParagraphs = request => {
    const messageParts = [];
    nl2br(request.message).map(part => {
      if (!part.type) {
        messageParts.push(part);
      }
    });

    this.setState({ pickedRequest: request, messageParts: messageParts });
  };

  render() {
    const { requests, pickedRequest, loading, messageParts } = this.state;
    console.log(pickedRequest);

    if (!loading) {
      return (
        <>
          <h1 className={styles.heading1}>Requests</h1>
          {requests.length > 0 ? (
            <div className={styles.headGrid}>
              <div className={styles.borderRight + " " + styles.cardGrid}>
                {requests
                  .slice()
                  .sort((a, b) => Number(b.pending) - Number(a.pending))
                  .reverse()
                  .map((request, i) => (
                    <div
                      key={i}
                      onClick={() => this.pickRequest(request)}
                      className={
                        styles.requestBox +
                        " " +
                        (request.id === pickedRequest.id
                          ? styles.selected
                          : null)
                      }
                    >
                      <Request
                        currentRequest={request}
                        onUpdateRequest={this.onUpdateRequest}
                        onDeleteRequest={this.onDeleteRequest}
                        alert={false}
                        link={false}
                      />
                    </div>
                  ))}
              </div>
              <div className={styles.scrollRequest}>
                {pickedRequest ? (
                  <RequestInfo
                    request={pickedRequest}
                    messageParts={messageParts}
                    onUpdateRequest={this.onUpdateRequest}
                  />
                ) : null}
              </div>
            </div>
          ) : (
            <p>No requests yet</p>
          )}
        </>
      );
    } else {
      return (
        <>
          <h1 className={styles.heading1}>Requests</h1>
          <div className={styles.centerLoader}>
            <Loader type="Grid" color="#ff3066" height={40} width={40} />
            <p className={styles.loaderLabel}>Loading requests</p>
          </div>
        </>
      );
    }
  }
}

export default inject(`requestStore`)(observer(Requests));
