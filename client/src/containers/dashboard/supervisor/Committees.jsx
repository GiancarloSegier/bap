import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import uiStyles from "../../../styles/ui.module.css";
import typoStyles from "../../../styles/typo.module.css";

import { inject, observer } from "mobx-react";
import InviteCommitteeForm from "../../../components/ui/InviteCommitteeForm";

class Committees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invite: false
    };
  }

  openInviteForm = e => {
    console.log("klik");
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

        <div className={styles.oneLine}>
          <h1 className={typoStyles.heading1}>Committees</h1>
          <div>
            <button type="button" className={uiStyles.textButton}>
              <span className={uiStyles.button__icon}>+</span>invite committee
            </button>
          </div>
        </div>
        <div className={styles.emptyContainer}>
          <p className={typoStyles.body}>
            Here you can organise the committees that are responsible for all
            the Races.
          </p>
          <p className={typoStyles.body}>
            Authorise someone as the Event Manager so they can complete their
            committee.
          </p>
          <p>
            You haven’t made any invited committee yet. You can invite someone{" "}
            <button
              className={typoStyles.buttonInline}
              onClick={this.openInviteForm}
            >
              here
            </button>
          </p>
        </div>
      </>
    );
  }
}

export default inject(`committeeStore`)(observer(Committees));
