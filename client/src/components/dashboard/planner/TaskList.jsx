import React, { Component } from "react";
import styles from "./TaskList.module.css";
import FontAwesome from "react-fontawesome";
import memberStyles from "../../../styles/members.module.css";
import TaskItem from "./TaskItem";
import { inject, observer } from "mobx-react";
import Loader from "react-loader-spinner";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  componentDidMount = () => {};

  getPeriod = async period => {
    this.setState({ loading: true });
    const { opened } = this.state;

    if (opened === period) {
      this.setState({ opened: false });
    } else {
      this.props.taskStore.getPeriodTasks(period);
      this.setState({ opened: period });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 500);
    }
  };

  getDueDate = () => {};

  render() {
    const { periodTasks, periods } = this.props.taskStore;
    const { committeeMembers } = this.props.userStore;
    const { raceday } = this.props.committeeStore.currentCommittee;
    const { loading } = this.state;
    return (
      <>
        {periods.map((period, i) => {
          console.log(period);
          return (
            <div key={i} className={styles.periodBlock}>
              <div
                onClick={() => this.getPeriod(period)}
                className={styles.periodHeader}
              >
                <FontAwesome
                  name="chevron-down"
                  className={
                    styles.purple +
                    " " +
                    (this.state.opened === period
                      ? styles.chevron__open
                      : styles.chevron__close)
                  }
                />
                <h2
                  className={
                    styles.periodTitle +
                    " " +
                    (this.state.opened === period ? styles.periodActive : null)
                  }
                >
                  {period}
                </h2>
              </div>
              {this.state.opened === period ? (
                <div className={styles.taskList}>
                  <ul className={styles.topbar}>
                    <li>Done?</li>
                    <li>Task</li>
                    <li>Assigned to</li>
                    <li>Due date?</li>
                    <li>Priority</li>
                  </ul>
                  {!loading ? (
                    <>
                      {periodTasks
                        .slice()
                        .sort((a, b) => a.priorityLevel - b.priorityLevel)
                        .map((task, i) => {
                          return (
                            <TaskItem
                              key={i}
                              task={task}
                              members={committeeMembers}
                              raceday={raceday}
                              delay={i * 2}
                            />
                          );
                        })}
                    </>
                  ) : (
                    <div className={styles.centerLoader}>
                      <Loader
                        type="Grid"
                        color="#ff3066"
                        height={30}
                        width={30}
                      />
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          );
        })}
      </>
    );
  }
}
export default inject(
  `taskStore`,
  `userStore`,
  `committeeStore`
)(observer(TaskList));
