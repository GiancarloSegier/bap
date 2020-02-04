import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import CommitteesListItem from "../../../../components/dashboard/committees/CommitteesListItem";
import CommitteeHeader from "../committees/CommitteeHeader";
import styles from "./committeesList.module.css";
import typoStyles from "../../../../styles/typo.module.css";
class CommitteesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { committees, countries } = this.props.committeeStore;

    return (
      <>
        <div className={styles.navbar}>
          <h2 className={typoStyles.heading2 + " " + styles.navItem}>
            Committees
          </h2>
          <h2 className={typoStyles.heading2 + " " + styles.navItem}>
            invitations
          </h2>
          <div className={styles.filter}>
            <p>Sort by:</p>

            <select className={styles.countrySelect}>
              {countries.map(country => (
                <option value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        <CommitteeHeader countries={countries} />
        {committees.map((committee, i) => {
          return <CommitteesListItem key={i} committee={committee} />;
        })}
      </>
    );
  }
}

export default inject(`committeeStore`)(observer(CommitteesList));
