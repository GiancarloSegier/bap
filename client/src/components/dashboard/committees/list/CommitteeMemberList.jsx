import React, { Component } from "react";
import styles from "./CommitteeMemberList.module.css";
import MemberListItem from "./MemberListItem";
import { inject, observer } from "mobx-react";
class CommitteeMemberList extends Component {
  constructor(props) {
    super(props);
  }
  onDeleteMember = async member => {
    console.log(member);

    await this.props.committeeStore.deleteCommitteeMember(member);
    await this.props.userStore.deleteUser(member);
  };
  render() {
    const { committeeMembers } = this.props.committeeStore;
    return (
      <>
        <ul className={styles.topbar}>
          <li>Name</li>
          <li>Function</li>
          <li>phone number</li>
          <li>e-mail</li>
        </ul>
        {committeeMembers.map((member, i) => {
          return (
            <MemberListItem
              key={i}
              index={i}
              member={member}
              onDeleteMember={this.onDeleteMember}
            />
          );
        })}
      </>
    );
  }
}
export default inject(
  `committeeStore`,
  `userStore`
)(observer(CommitteeMemberList));
