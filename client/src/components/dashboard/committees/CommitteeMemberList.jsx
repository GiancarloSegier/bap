import React, { Component } from "react";
import styles from "./CommitteeMemberList.module.css";
import MemberListItem from "../committees/MemberListItem";
class CommitteeMemberList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { committee } = this.props;
    return (
      <>
        <ul className={styles.topbar}>
          <li>Name</li>
          <li>Function</li>
          <li>phone number</li>
          <li>e-mail</li>
        </ul>
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
        <MemberListItem />
      </>
    );
  }
}
export default CommitteeMemberList;
