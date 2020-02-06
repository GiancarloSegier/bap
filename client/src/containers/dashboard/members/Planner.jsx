import React, { Component } from "react";
// import styles from "./Planner.module.css";
// import Form from "../components/Form";
import { inject, observer } from "mobx-react";
import TaskItem from "../../../components/dashboard/planner/TaskItem";
import Loader from "react-loader-spinner";
import styles from "../platform.module.css";

class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount = async () => {
    await this.props.committeeStore.getOne(
      this.props.userStore.authUser.committeeId
    );

    await this.getDate();
  };

  getDate = async () => {
    const { currentCommittee, raceday } = this.props.committeeStore;

    this.setState({ raceday: raceday });
  };

  render() {
    const { tasks } = this.props.taskStore;
    const { committeeMembers, fetching } = this.props.userStore;
    const { raceday } = this.state;

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
          <div>
            <p>Planner</p>

            {tasks
              .sort((a, b) => a.priorityLevel - b.priorityLevel)
              // .slice(0, 10)
              .map((task, i) => {
                return (
                  <TaskItem
                    key={i}
                    task={task}
                    members={committeeMembers}
                    raceday={raceday}
                  />
                );
              })}
          </div>
        </>
      );
    }
  }
}

export default inject(
  `taskStore`,
  `userStore`,
  `committeeStore`
)(observer(Planner));
