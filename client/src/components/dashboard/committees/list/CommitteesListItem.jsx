import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styles from "./ListItem.module.css";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

import memberStyles from "../../../../styles/members.module.css";
class CommitteesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      committeeMembers: []
    };
  }

  componentDidMount = async () => {
    this.getDate();
    await this.getMember();
  };

  getMember = async () => {
    const members = [];
    const { users } = this.props.userStore;
    await users.forEach(user => {
      if (user.committeeId === this.props.committee.id) {
        members.push(user);
      }
    });

    this.setState({ members: members });
  };
  getDate() {
    const requestDate = new Date(this.props.committee.raceday);
    const day = requestDate.getDate();
    const month = requestDate.getMonth() + 1;
    const year = requestDate.getFullYear();

    const dateString = `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;

    this.setState({ dateString: dateString });
  }

  render() {
    const { committee } = this.props;
    const { members } = this.state;

    return (
      <Link
        className={styles.listItem}
        to={`/dashboard/committees/detail/${committee.id}`}
      >
        <p className={styles.name}>{committee.name}</p>
        <p>{committee.city}</p>
        <p>{committee.country}</p>
        <p>{this.state.dateString}</p>
        <div className={styles.memberImages}>
          {members ? (
            <>
              {members.map(member => {
                let job = member.job.assignment
                  .split(" ")
                  .join("")
                  .toLowerCase();
                return (
                  <div className={styles.memberBlock}>
                    <img
                      src={member.avatarUrl}
                      className={
                        styles.icon +
                        " " +
                        memberStyles.border +
                        " " +
                        memberStyles[job]
                      }
                      width="40"
                      height="40"
                      alt="Different countries"
                    />
                    <div className={styles.nameTag}>
                      <span>
                        {member.name} {member.surname}
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>

        {/* {members ? <p>{members.length}</p> : null} */}
        <FontAwesome name="chevron-right" className={styles.arrow} />
      </Link>
    );
  }
}

export default inject(`userStore`)(observer(CommitteesListItem));
