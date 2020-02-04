import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styles from "./CommitteesListItem.module.css";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
class CommitteesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      committeeMembers: []
    };
  }

  componentDidMount() {
    this.getDate();
    this.getMember();
  }

  getMember() {
    const members = [];
    const { users } = this.props.userStore;
    users.forEach(user => {
      if (user.committeeId === this.props.committee.id) {
        members.push(user);
      }
    });
    this.setState({ members: members });
  }
  getDate() {
    const requestDate = new Date(this.props.committee.raceday);
    const day = requestDate.getDate();
    const month = requestDate.getMonth() + 1;
    const year = requestDate.getFullYear();

    const dateString = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;

    this.setState({ dateString: dateString });
  }

  render() {
    const { committee } = this.props;
    const { members } = this.state;
    console.log(committee);

    return (
      <Link
        className={styles.listItem}
        to={`/dashboard/committees/detail/${committee.id}`}
      >
        <p className={styles.name}>{committee.name}</p>
        <p>{committee.city}</p>
        <p>{committee.country}</p>
        <p>{this.state.dateString}</p>
        {members ? <p>{members.length}</p> : null}
        <FontAwesome name="chevron-right" className={styles.arrow} />
      </Link>
    );
  }
}

export default inject(`userStore`)(observer(CommitteesListItem));
