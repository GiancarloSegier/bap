import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import typoStyles from "../../../styles/typo.module.css";
import { inject, observer } from "mobx-react";
import CommitteesList from "./committees/CommitteesList";
import CommitteeHeader from "./committees/CommitteeHeader";
import CommitteesTop from "../../../components/dashboard/committees/CommitteesTop";

class Committees extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { committees } = this.props.committeeStore;
    return (
      <>
        <CommitteesTop />
        {committees.length < 0 ? (
          <>
            <CommitteeHeader />
            <div className={styles.container}>
              <div className={styles.overlay}></div>
              <div className={styles.backgroundEmpty}>
                <div className={styles.stroke}></div>
                <div className={styles.stroke}></div>
                <div className={styles.stroke}></div>
              </div>

              <div className={styles.committeeEmptyContainer}>
                <p className={typoStyles.body}>
                  Here you can find an overview of all the race committees from
                  every country. There are no committees added yet.
                </p>

                <button
                  className={typoStyles.buttonInline}
                  onClick={this.openInviteForm}
                >
                  Invite your first committee
                </button>
                <img
                  src="http://placekitten.com/200/200"
                  className={styles.emptyImage}
                  alt="Location"
                />
              </div>
            </div>
          </>
        ) : (
          <CommitteesList />
        )}
      </>
    );
  }
}

export default inject(`committeeStore`)(observer(Committees));
