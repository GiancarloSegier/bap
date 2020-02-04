import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import Alert from "../../../components/ui/Alert";
import Request from "../../../components/dashboard/requests/Request";
import { inject, observer } from "mobx-react";

import uiStyles from "../../../styles/ui.module.css";
import typoStyles from "../../../styles/typo.module.css";

import Warning from "../../../components/ui/Warning";
import Statistics from "../../../components/dashboard/Statistics";
import RequestEmpty from "../../../components/dashboard/requests/RequestEmpty";

class SuperDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
      warning: false,
      pendingRequests: [],
      newRequests: []
    };
  }

  componentDidMount = () => {
    this.props.requestStore.getAll();
    const { pendingRequests, newRequests } = this.props.requestStore;
    this.setState({
      pendingRequests: pendingRequests,
      newRequests: newRequests
    });
  };

  componentWillUnmount() {
    this.props.requestStore.getAll();
  }

  onUpdateRequest = async request => {
    request.setPending(true);

    await this.props.requestStore.updatePendingRequests(request);
    const { pendingRequests, newRequests } = this.props.requestStore;
    this.setState({
      pendingRequests: pendingRequests,
      newRequests: newRequests
    });

    await fetch(
      `http://localhost:4000/send-mail?type=invite&id=${request.id}&name=${request.name}&recipient=${request.email}&organisation=${request.organisation}`
    ).catch(err => console.log(err));
  };

  onDeleteRequest = async request => {
    await this.props.requestStore.deleteRequest(request);

    const { pendingRequests, newRequests } = this.props.requestStore;
    this.setState({
      pendingRequests: pendingRequests,
      newRequests: newRequests
    });
  };

  hideAlert = alertVisible => {
    this.setState({ alert: alertVisible, pickedRequest: {} });
  };

  setParams = (alertVisible, request, message, icon) => {
    this.setState({
      pickedRequest: request,
      message: message,
      icon: icon,
      alert: alertVisible
    });
  };

  showWarning = request => {
    this.setState({ requestToDelete: request, warning: true });
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
    const { greeting } = this.props;
    const { authUser } = this.props.userStore;
    const {
      pendingRequests,
      newRequests,
      warning,
      alert,
      message,
      icon,
      pickedRequest
    } = this.state;

    return (
      <>
        {warning ? (
          <Warning onContinue={this.onContinue} onCancel={this.onCancel} />
        ) : null}
        {alert ? (
          <Alert
            message={message}
            icon={icon}
            hideAlert={this.hideAlert}
            onFinishAlert={this.onUpdateRequest}
            params={pickedRequest}
          />
        ) : null}
        <div className={styles.oneLine}>
          <h1 className={typoStyles.heading1}>
            {greeting} {authUser.name}.
          </h1>
          <div>
            <button
              type="button"
              className={uiStyles.textButton + " " + uiStyles.purple}
            >
              <span className={uiStyles.button__icon}>+</span>new announcement
            </button>
            <button type="button" className={uiStyles.textButton}>
              <span className={uiStyles.button__icon}>+</span>invite committee
            </button>
          </div>
        </div>
        <div className={styles.headGrid}>
          <div className={styles.subGrid}>
            <section className={styles.frame + " " + styles.borderRight}>
              <h2 className={typoStyles.heading2}>Acces requests</h2>
              <div className={styles.cardGrid}>
                {newRequests.length > 0 ? (
                  <>
                    {newRequests.slice(0, 4).map((request, i) => (
                      <Request
                        key={i}
                        currentRequest={request}
                        onUpdateRequest={this.onUpdateRequest}
                        onDeleteRequest={this.showWarning}
                        alert={true}
                        setParams={this.setParams}
                        link={true}
                      />
                    ))}
                  </>
                ) : (
                  <p>No requests to show</p>
                )}
              </div>
            </section>
            <section
              className={
                styles.frame + " " + styles.borderRight + " " + styles.borderTop
              }
            >
              <h2 className={typoStyles.heading2}>Committee invites</h2>
              <div className={styles.cardGrid}>
                {pendingRequests.length > 0 ? (
                  <>
                    {pendingRequests.slice(0, 4).map((request, i) => (
                      <Request
                        key={i}
                        currentRequest={request}
                        onUpdateRequest={this.onUpdateRequest}
                        onDeleteRequest={this.showWarning}
                        alert={true}
                        setParams={this.setParams}
                        link={true}
                      />
                    ))}
                    <RequestEmpty />
                  </>
                ) : (
                  <RequestEmpty />
                )}
              </div>
            </section>
          </div>
          <section className={styles.frame}>
            <Statistics />
          </section>
        </div>
      </>
    );
  }
}

export default inject(`userStore`, `requestStore`)(observer(SuperDashboard));
