import React, { Component } from "react";

import styles from "./MemberListItem.module.css";
import memberStyles from "../../../../styles/members.module.css";
import FontAwesome from "react-fontawesome";
import { inject, observer } from "mobx-react";
class MemberListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    const job = this.props.member.job.assignment
      .split(" ")
      .join("")
      .toLowerCase()
      .replace("&", "");
    this.setState({ job: job });
  };

  render() {
    const { job } = this.state;
    const { member } = this.props;
    const { privileges } = this.props.userStore.authUser.job;

    return (
      <div className={styles.listItem}>
        <div className={styles.person}>
          <img
            src={member.avatarUrl}
            className={
              styles.avatar +
              " " +
              memberStyles.border +
              " " +
              memberStyles[job]
            }
            width="40"
            height="40"
            alt="Different countries"
          />
          <p className={styles.name}>
            {member.name} {member.surname}
          </p>
        </div>
        <div className={styles.job}>
          <div className={memberStyles.dot + " " + memberStyles[job]}></div>
          <p>{member.job.assignment}</p>
        </div>

        <p>{member.phone}</p>
        <p>{member.email}</p>

        {privileges === "supervisor" ? null : (
          <div className={styles.icons}>
            <FontAwesome
              className={styles.icon}
              name="trash"
              //onClick={this.onView}
            />
            <FontAwesome
              className={styles.icon}
              name="edit"
              // onClick={this.onEdit}
            />
          </div>
        )}
      </div>
    );
  }
}

export default inject(`userStore`)(observer(MemberListItem));
