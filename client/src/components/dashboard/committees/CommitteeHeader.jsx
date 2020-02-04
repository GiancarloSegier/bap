import React, { Component } from "react";
import styles from "./committees.module.css";
class CommitteeHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={styles.topbar}>
        <li>Organisation</li>
        <li>City</li>
        <li>Country</li>
        <li>Raceday</li>
        <li>Members</li>
      </ul>
    );
  }
}

export default CommitteeHeader;
