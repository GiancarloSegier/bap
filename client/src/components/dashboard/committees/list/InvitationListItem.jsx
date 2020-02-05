import React, { Component } from "react";

import styles from "./ListItem.module.css";

class InvitationListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getAcceptDate();
  }
  getAcceptDate() {
    const requestDate = new Date(this.props.request.updatedAt);
    const day = requestDate.getDate();
    const month = requestDate.getMonth() + 1;
    const year = requestDate.getFullYear();

    const dateString = `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;

    this.setState({ dateString: dateString });
  }

  render() {
    const { request } = this.props;

    return (
      <div className={styles.listItem + " " + styles.invitationGrid}>
        <p className={styles.name}>{request.organisation}</p>
        <p>
          {request.name} {request.surname}
        </p>
        <p>{request.phone}</p>
        <a href={`mailto:${request.email}`} className={styles.mail}>
          {request.email}
        </a>
        <p>{this.state.dateString}</p>
      </div>
    );
  }
}

export default InvitationListItem;
