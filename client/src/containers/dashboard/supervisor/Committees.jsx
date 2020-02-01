import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import uiStyles from "../../../styles/ui.module.css";

import { inject, observer } from "mobx-react";

class Committees extends Component {
  constructor(props) {
    super(props);
  }

  openInviteForm = e => {
    console.log("klik");
  };

  render() {
    return (
      <>
        <div className={styles.oneLine}>
          <h1 className={styles.heading1}>Committees</h1>
          <div>
            <button type="button" className={uiStyles.textButton}>
              <span className={uiStyles.button__icon}>+</span>invite committee
            </button>
          </div>
        </div>
        <div className={styles.emptyContainer}>
          <p className={styles.body}>
            Here you can organise the committees that are responsible for all
            the Races.
          </p>
          <p className={styles.body}>
            Authorise someone as the Event Manager so they can complete their
            committee.
          </p>
          <p>
            You haven’t made any invited committee yet. You can invite someone{" "}
            <button
              className={styles.buttonInline}
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
