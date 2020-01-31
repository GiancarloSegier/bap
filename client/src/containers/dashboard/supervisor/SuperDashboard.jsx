import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import Alert from "../../../components/ui/Alert";
import Request from "../../../components/dashboard/requests/Request";
import { inject, observer } from "mobx-react";

import uiStyles from "../../../styles/ui.module.css";

class SuperDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
      pendingRequests: [],
      newRequests: []
    };
  }

  componentDidMount() {
    const { pendingRequests, newRequests } = this.props.requestStore;
    this.setState({
      pendingRequests: pendingRequests,
      newRequests: newRequests
    });
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

  render() {
    const { greeting } = this.props;
    const { authUser } = this.props.userStore;
    const { pendingRequests, newRequests } = this.state;

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
              <h2 className={styles.heading2}>Acces requests</h2>
              <div className={styles.cardGrid}>
                {newRequests.length > 0 ? (
                  <>
                    {newRequests.slice(0, 4).map(request => (
                      <Request
                        currentRequest={request}
                        onUpdateRequest={this.onUpdateRequest}
                        onDeleteRequest={this.onDeleteRequest}
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
              <h2 className={styles.heading2}>Committee invites</h2>
              <div className={styles.cardGrid}>
                {pendingRequests.length > 0 ? (
                  <>
                    {pendingRequests.slice(0, 4).map(request => (
                      <Request
                        currentRequest={request}
                        onUpdateRequest={this.onUpdateRequest}
                        onDeleteRequest={this.onDeleteRequest}
                        alert={true}
                        setParams={this.setParams}
                        link={true}
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
