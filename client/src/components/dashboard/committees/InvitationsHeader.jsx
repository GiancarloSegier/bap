import React, { Component } from "react";
import styles from "./committees.module.css";
class InvitationsHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={styles.topbar + " " + styles.invitationGrid}>
        <li>Organisation</li>
        <li>Name</li>
        <li>Phone</li>
        <li>Email</li>
        <li>Accepted</li>
      </ul>
    );
  }
}

export default InvitationsHeader;
