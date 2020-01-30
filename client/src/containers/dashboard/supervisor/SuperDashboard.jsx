import React, { Component } from "react";
import styles from "../Dashboard.module.css";
// import Form from "../components/Form";
import Alert from "../../../components/ui/Alert";

import Request from "../../../components/dashboard/Request";

import { inject, observer } from "mobx-react";

class SuperDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false
    };
  }

  onUpdateRequest = async request => {
    console.log(request);
    request.setPending(true);
    await this.props.requestStore.updateRequest(request);
    await this.props.requestStore.updatePendingRequests(request);

    await fetch(
      `http://localhost:4000/send-mail?type=invite&id=${request.id}&name=${request.name}&recipient=${request.email}&organisation=${request.organisation}`
    ).catch(err => console.log(err));
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

  render() {
    const { greeting } = this.props;
    const { authUser } = this.props.userStore;
    const { pendingRequests, newRequests } = this.props.requestStore;

    return (
      <>
        {this.state.alert ? (
          <Alert
            message={this.state.message}
            icon={this.state.icon}
            hideAlert={this.hideAlert}
            onFinishAlert={this.onUpdateRequest}
            params={this.state.pickedRequest}
          />
        ) : null}
        <div className={styles.oneLine}>
          <h1 className={styles.heading1}>
            {greeting} {authUser.name}.
          </h1>
          <div>
            <button
              type="button"
              className={styles.button + " " + styles.purple}
            >
              <span className={styles.button__icon}>+</span>new announcement
            </button>
            <button type="button" className={styles.button}>
              <span className={styles.button__icon}>+</span>invite committee
            </button>
          </div>
        </div>
        <div className={styles.headGrid}>
          <div className={styles.subGrid}>
            <section className={styles.frame + " " + styles.borderRight}>
              <h2 className={styles.heading2}>Acces requests</h2>
              <div className={styles.cardGrid}>
                {newRequests.length > 0 ? (
                  <>
                    {newRequests.map(request => (
                      <Request
                        currentRequest={request}
                        onUpdateRequest={this.onUpdateRequest}
                        setParams={this.setParams}
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
              <h2 className={styles.heading2}>Committee invites</h2>
              <div className={styles.cardGrid}>
                {this.props.requestStore.requests.length > 0 ? (
                  <>
                    {pendingRequests.map(request => (
                      <Request
                        currentRequest={request}
                        onUpdateRequest={this.onUpdateRequest}
                        setParams={this.setParams}
                      />
                    ))}
                  </>
                ) : (
                  <p>No invites to show</p>
                )}
              </div>
            </section>
          </div>
          <section className={styles.frame}>
            <h2 className={styles.heading2}>Race statistics</h2>
          </section>
        </div>
      </>
    );
  }
}

export default inject(`userStore`, `requestStore`)(observer(SuperDashboard));
