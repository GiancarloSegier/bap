import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import uiStyles from "../../../styles/ui.module.css";
import typoStyles from "../../../styles/typo.module.css";

import { inject, observer } from "mobx-react";

class MemberDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { invite: false };
  }

  openInviteForm = e => {
    this.setState({ invite: true });
  };
  closeInviteForm = () => {
    this.setState({ invite: false });
  };

  render() {
    const { authUser } = this.props.userStore;
    const { greeting } = this.props;

    return (
      <>
        {/* {invite ? <InviteForm onConfirm={this.closeInviteForm} /> : null} */}
        <div className={styles.oneLine}>
          <h1 className={typoStyles.heading1}>
            {greeting} {authUser.name}.
          </h1>
          <div className={styles.buttonGroup}>
            <button
              type="button"
              className={uiStyles.textButton + " " + uiStyles.purple}
              onClick={this.openInviteForm}
            >
              <span className={uiStyles.button__icon}>+</span>Invite member
            </button>
            <button
              type="button"
              className={uiStyles.textButton}
              // onClick={this.openInviteForm}
            >
              <span className={uiStyles.button__icon}>+</span>Create new task
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default inject(`userStore`)(observer(MemberDashboard));
