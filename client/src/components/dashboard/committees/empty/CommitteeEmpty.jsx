import React, { Component } from "react";
import styles from "../../../../styles/empty.module.css";
import typoStyles from "../../../../styles/typo.module.css";
import InviteCommitteeForm from "../../../ui/InviteCommitteeForm";

class CommitteeEmpty extends Component {
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
    return (
      <>
        {invite ? (
          <InviteCommitteeForm onConfirm={this.closeInviteForm} />
        ) : null}
        <div className={styles.container}>
          <div className={styles.overlay}></div>
          <div className={styles.backgroundEmpty}>
            <div className={styles.stroke}></div>
            <div className={styles.stroke}></div>
            <div className={styles.stroke}></div>
          </div>

          <div className={styles.committeeEmptyContainer}>
            <img
              src="../../assets/empty_committee.png"
              className={styles.emptyImage}
              alt="Location"
            />
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
          </div>
        </div>
      </>
    );
  }
}

export default CommitteeEmpty;
