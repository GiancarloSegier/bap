import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styles from "./CommitteesListItem.module.css";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
class CommitteesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getDate();
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
    console.log(committee);
    new Date(committee.raceday).getDate();
    return (
      <Link
        className={styles.listItem}
        to={`/dashboard/committees/${committee.id}`}
      >
        <p className={styles.name}>{committee.name}</p>
        <p>{committee.city}</p>
        <p>{committee.country}</p>
        <p>{this.state.dateString}</p>
        <p>10</p>
        <FontAwesome name="chevron-right" className={styles.arrow} />
      </Link>
    );
  }
}

export default CommitteesListItem;
