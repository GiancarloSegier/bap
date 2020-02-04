import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import uiStyles from "../../../styles/ui.module.css";
import typoStyles from "../../../styles/typo.module.css";

import { inject, observer } from "mobx-react";
import InviteCommitteeForm from "../../../components/ui/InviteCommitteeForm";
import CommitteesList from "./committees/CommitteesList";
import CommitteeHeader from "./committees/CommitteeHeader";

class Committees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invite: false
    };
  }

  openInviteForm = e => {
    this.setState({ invite: true });
  };
  closeInviteForm = () => {
    this.setState({ invite: false });
  };

  render() {
    const { invite } = this.state;
    const { committees } = this.props.committeeStore;
    return (
      <>
        {invite ? (
          <InviteCommitteeForm onConfirm={this.closeInviteForm} />
        ) : null}

        <div className={styles.oneLine}>
          <h1 className={typoStyles.heading1}>Committees</h1>
          <div>
            <button
              type="button"
              className={uiStyles.textButton}
              onClick={this.openInviteForm}
            >
              <span className={uiStyles.button__icon}>+</span>invite committee
            </button>
          </div>
        </div>
        {committees.length < 1 ? (
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
