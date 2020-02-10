import React, { Component } from "react";

import { inject, observer } from "mobx-react";

import Loader from "react-loader-spinner";
import styles from "../../platform.module.css";
import uiStyles from "../../../../styles/ui.module.css";
import typoStyles from "../../../../styles/typo.module.css";

import PlannerNav from "./PlannerNav";
import CompletedTaskList from "../../../../components/dashboard/planner/CompletedTaskList";

class CompletedTasks extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount = async () => {
    await this.props.committeeStore.getOne(
      this.props.userStore.authUser.committeeId
    );
  };

  render() {
    const { fetching, privileges } = this.props.userStore;

    if (fetching) {
      return (
        <div className={styles.centerLoader}>
          <Loader type="Grid" color="#ff3066" height={40} width={40} />
          <p className={styles.loaderLabel}>Loading tasks</p>
        </div>
      );
    } else {
      return (
        <>
          <div className={styles.oneLine}>
            <h1 className={typoStyles.heading1}>CompletedTasks</h1>
            {privileges === "admin" ? (
              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  className={uiStyles.textButton}
                  // onClick={this.openInviteForm}
                >
                  <span className={uiStyles.button__icon}>+</span>Add task
                </button>
              </div>
            ) : null}
          </div>
          <PlannerNav />

          <CompletedTaskList />
        </>
      );
    }
  }
}

export default inject(`userStore`, `committeeStore`)(observer(CompletedTasks));
