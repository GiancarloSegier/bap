import React, { Component } from "react";

import styles from "../committees.module.css";
import uiStyles from "../../../../styles/ui.module.css";
import typoStyles from "../../../../styles/typo.module.css";
import InviteCommitteeForm from "../../../ui/InviteCommitteeForm";
import CommitteesNav from "./CommitteesNav";

class CommitteesTop extends Component {
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
        <CommitteesNav />
      </>
    );
  }
}

export default CommitteesTop;
