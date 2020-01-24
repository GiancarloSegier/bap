import React, { Component } from "react";
// import styles from "./RequestDetail.module.css";
import { observer, inject } from "mobx-react";

class RequestDetail extends Component {
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
    const { currentRequest, approveRequest } = this.props;
    return (
      <li>
        {currentRequest.name} - {currentRequest.organisation} - pending:{" "}
        {String(currentRequest.pending)}
        {currentRequest.pending === true ? (
          console.log("true pending")
        ) : (
          <button onClick={() => this.approveRequest(currentRequest)}>
            Approve request
          </button>
        )}
      </li>
    );
  }
}

export default inject(`requestStore`)(observer(RequestDetail));
