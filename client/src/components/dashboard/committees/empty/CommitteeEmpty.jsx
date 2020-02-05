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
    );
  }
}

export default CommitteeEmpty;
