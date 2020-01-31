import React, { Component } from "react";
import styles from "../platform.module.css";
import { inject, observer, PropTypes } from "mobx-react";
import Request from "../../../components/dashboard/requests/Request";

import Loader from "react-loader-spinner";
import { toJS } from "mobx";
import RequestInfo from "../../../components/dashboard/requests/RequestInfo";
import Warning from "../../../components/ui/Warning";

const nl2br = require("react-nl2br");

class Requests extends Component {
  fullPickedRequest;
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      pickedRequest: null,
      loading: true,
      warning: false
    };
  }

  componentDidMount = async () => {
    const { requests } = this.props.requestStore;
    setTimeout(() => {
      this.setState({
        requests: requests
      });
      this.setPickedRequest();
    }, 500);
    setTimeout(() => {
      this.setState({ loading: false });
    }, 800);
  };

  componentWillUnmount() {
    this.props.requestStore.getAll();
  }

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
          .sort(
            (a, b) =>
              Number(b.pending) - Number(a.pending) ||
              Number(b.seen) - Number(a.seen)
          )
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
    updateRequest.setSeen(true);
    await this.props.requestStore.updateRequest(updateRequest);

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

    if (!request || !request.setPending) {
      deleteRequest = this.fullPickedRequest;
    } else {
      deleteRequest = request;
    }
    await this.props.requestStore.deleteRequest(deleteRequest);

    const { requests } = this.props.requestStore;

    this.setState({
      requests: requests
    });
    this.setPickedRequest();
  };

  pickRequest = async request => {
    this.fullPickedRequest = request;

    this.fullPickedRequest.setSeen(true);
    await this.props.requestStore.updateRequest(this.fullPickedRequest);

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

  showWarning = request => {
    this.setState({ warning: true, requestToDelete: request });
  };

  onContinue = () => {
    this.onDeleteRequest(this.state.requestToDelete);
    setTimeout(() => {
      this.setState({ warning: false });
    }, 200);
  };

  onCancel = () => {
    setTimeout(() => {
      this.setState({ warning: false });
    }, 200);
  };

  render() {
    const {
      requests,
      pickedRequest,
      loading,
      messageParts,
      warning
    } = this.state;

    if (!loading) {
      return (
        <>
          {warning ? (
            <Warning onContinue={this.onContinue} onCancel={this.onCancel} />
          ) : null}
          <h1 className={styles.heading1}>Requests</h1>
          {requests.length > 0 ? (
            <div className={styles.headGrid}>
              <div className={styles.borderRight + " " + styles.cardGrid}>
                {requests
                  .slice()
                  .sort(
                    (a, b) =>
                      Number(b.pending) - Number(a.pending) ||
                      Number(b.seen) - Number(a.seen)
                  )
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
                        onDeleteRequest={this.showWarning}
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
                    onDeleteRequest={this.showWarning}
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
