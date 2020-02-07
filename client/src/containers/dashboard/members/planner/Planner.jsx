import React, { Component } from "react";
// import styles from "./Planner.module.css";
// import Form from "../components/Form";
import { inject, observer } from "mobx-react";
import TaskItem from "../../../../components/dashboard/planner/TaskItem";
import Loader from "react-loader-spinner";
import styles from "../../platform.module.css";
import uiStyles from "../../../../styles/ui.module.css";
import typoStyles from "../../../../styles/typo.module.css";
import TaskList from "../../../../components/dashboard/planner/TaskList";

import PlannerNav from "./PlannerNav";

class Planner extends Component {
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
            <h1 className={typoStyles.heading1}>Planner</h1>
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

          <TaskList />
        </>
      );
    }
  }
}

export default inject(`userStore`, `committeeStore`)(observer(Planner));
