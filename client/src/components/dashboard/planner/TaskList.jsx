import React, { Component } from "react";
import styles from "./TaskList.module.css";
import FontAwesome from "react-fontawesome";
import TaskItem from "./TaskItem";
import { inject, observer } from "mobx-react";
import Loader from "react-loader-spinner";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  componentDidMount = () => {
    this.getDueDate();
  };

  getPeriod = async term => {
    this.setState({ loading: true });
    const { opened } = this.state;

    if (opened === term) {
      this.setState({ opened: false });
    } else {
      this.props.taskStore.getPeriodTasks(term);
      this.setState({ opened: term });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 500);
    }
  };

  getDueDate = () => {
    const { periods } = this.props.taskStore;

    const { raceday } = this.props.committeeStore.currentCommittee;

    for (let i = 0; i < periods.length; i++) {
      const period = periods[i];
      const oneDay = 24 * 60 * 60 * 1000;
      const min = period.min;
      const max = period.max;
      const currentRaceday = new Date(raceday);
      const currentDay = new Date();

      const differenceDays = Math.round(
        Math.abs((currentRaceday - currentDay) / oneDay)
      );

      if (differenceDays > min && differenceDays < max) {
        this.getPeriod(period.term);
      }
    }
  };

  render() {
    const { periodTasks, periods } = this.props.taskStore;
    const { committeeMembers } = this.props.userStore;
    const { raceday } = this.props.committeeStore.currentCommittee;
    const { loading } = this.state;

    return (
      <>
        {periods.map((period, i) => {
          return (
            <div key={i} className={styles.periodBlock}>
              <div
                onClick={() => this.getPeriod(period.term)}
                className={styles.periodHeader}
              >
                <FontAwesome
                  name="chevron-down"
                  className={
                    styles.purple +
                    " " +
                    (this.state.opened === period.term
                      ? styles.chevron__open
                      : styles.chevron__close)
                  }
                />
                <h2
                  className={
                    styles.periodTitle +
                    " " +
                    (this.state.opened === period.term
                      ? styles.periodActive
                      : null)
                  }
                >
                  {period.term}
                </h2>
              </div>
              {this.state.opened === period.term ? (
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
