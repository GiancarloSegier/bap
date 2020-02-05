import React, { Component } from "react";
import styles from "../../../../styles/empty.module.css";
import typoStyles from "../../../../styles/typo.module.css";
import InviteCommitteeForm from "../../../ui/InviteCommitteeForm";

class InvitationsEmpty extends Component {
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
              Seems like you don't have any invites pending or all your invites
              are registered.
            </p>

            <button
              className={typoStyles.buttonInline}
              onClick={this.openInviteForm}
            >
              Invite a committee
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

export default InvitationsEmpty;
