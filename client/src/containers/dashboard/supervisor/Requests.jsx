import React, { Component } from "react";
import styles from "../platform.module.css";
import typoStyles from "../../../styles/typo.module.css";
import { inject, observer, PropTypes } from "mobx-react";
import Request from "../../../components/dashboard/requests/Request";

import Loader from "react-loader-spinner";
import { toJS } from "mobx";
import RequestInfo from "../../../components/dashboard/requests/RequestInfo";
import Warning from "../../../components/ui/Warning";

const nl2br = require("react-nl2br");

class Requests extends Component {
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
    await this.props.requestStore.requests;

    this.setState({
      requests: this.props.requestStore.requests
    });

    if (this.props.requestStore.requests) {
      setTimeout(async () => {
        await this.setPickedRequest();
        this.setState({ loading: false });
      }, 500);
    } else {
      this.setState({ loading: false });
    }
  };

  componentWillUnmount() {
    this.props.requestStore.getAll();
  }

  setPickedRequest = async () => {
    const { requests } = this.state;

    let pickedRequest;
    if (requests.length > 0) {
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
                Number(b.seen) - Number(a.seen) ||
                Number(b.pending) - Number(a.pending)
            )
            .reverse()
        )[0];
      }
    }

    console.log(pickedRequest);

    this.getMessageParagraphs(pickedRequest);
  };

  onUpdateRequest = async request => {
    request.setPending(true);

    await this.props.requestStore.updateRequest(request);
    const { requests } = this.props.requestStore;
    this.setState({
      requests: requests
    });

    await fetch(
      `http://localhost:4000/send-mail?type=invite&id=${request.id}&name=${request.name}&recipient=${request.email}&organisation=${request.organisation}`
    ).catch(err => console.log(err));
  };

  onDeleteRequest = async request => {
    await this.props.requestStore.deleteRequest(request);
    const { requests } = this.props.requestStore;
    this.setState({
      requests: requests
    });
    this.setPickedRequest();
  };

  pickRequest = async request => {
    request.setSeen(true);
    await this.props.requestStore.updateRequest(request);
    const { requests } = this.props.requestStore;

    this.setState({
      requests: requests
    });

    this.getMessageParagraphs(request);
  };

  getMessageParagraphs = request => {
    console.log(request);
    if (request.message.length > 0 || request.message !== "") {
      const messageParts = [];
      nl2br(request.message).map(part => {
        if (!part.type) {
          messageParts.push(part);
        }
      });

      this.setState({ pickedRequest: request, messageParts: messageParts });
    } else {
      this.setState({ pickedRequest: request });
    }
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
          <h1 className={typoStyles.heading1}>Requests</h1>
          {requests.length > 0 ? (
            <div className={styles.headGrid}>
              <div className={styles.borderRight + " " + styles.cardGrid}>
                {requests
                  .slice()
                  .sort(
                    (a, b) =>
                      Number(b.seen) - Number(a.seen) ||
                      Number(b.pending) - Number(a.pending)
                  )
                  .reverse()
                  .map((request, i) => {
                    console.log(request);
                    console.log(pickedRequest);
                    return (
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
                    );
                  })}
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
          <h1 className={typoStyles.heading1}>Requests</h1>
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
