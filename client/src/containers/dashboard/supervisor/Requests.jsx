import React, { Component } from "react";
import styles from "../platform.module.css";
// import Form from "../components/Form";

import { inject, observer, PropTypes } from "mobx-react";
import Request from "../../../components/dashboard/Request";

class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }
  componentDidMount() {
    const { requests } = this.props.requestStore;
    this.setState({
      requests: requests
    });
  }

  onUpdateRequest = async request => {
    request.setPending(true);
    await this.props.requestStore.updatePendingRequests(request);
    const { requests } = this.props.requestStore;
    this.setState({
      requests: requests
    });
    await fetch(
      `http://localhost:4000/send-mail?type=invite&id=${request.id}&name=${request.name}&recipient=${request.email}&organisation=${request.organisation}`
    ).catch(err => console.log(err));
  };

  render() {
    const { requests } = this.state;
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
                .map(request => (
                  <Request
                    currentRequest={request}
                    onUpdateRequest={this.onUpdateRequest}
                    alert={false}
                  />
                ))}
            </div>
            <div>
              <p>Detail card comes here</p>
            </div>
          </div>
        ) : (
          <p>Add a new request, please.</p>
        )}
      </>
    );
  }
}

Requests.propTypes = {
  requestStore: PropTypes.observableObject.isRequired
};

export default inject(`requestStore`)(observer(Requests));
