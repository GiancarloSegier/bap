import React, { Component } from "react";
import styles from "./TaskList.module.css";
import FontAwesome from "react-fontawesome";

import TaskItem from "./TaskItem";
import { inject, observer } from "mobx-react";
import Loader from "react-loader-spinner";

import CompletedTasksEmpty from "./CompletedTasksEmpty";

import * as Scroll from "react-scroll";

const scroller = Scroll.scroller;
const animatedScroll = Scroll.animateScroll;

class CompletedTaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  componentDidMount = async () => {
    this.getDueDate();
  };

  getPeriod = term => {
    this.setState({ loading: true });
    const { opened } = this.state;

    if (opened === term) {
      this.setState({ opened: false });
      animatedScroll.scrollToTop();
    } else {
      this.props.committeeStore.getPeriodCompletedTasks(term);
      this.setState({ opened: term });
      setTimeout(() => {
        this.setState({ loading: false });
        scroller.scrollTo(term, {
          duration: 1500,
          delay: 100,
          smooth: true,
          offset: -200
        });
      }, 500);
    }
  };

  getDueDate = () => {
    const { completedTasksPeriods } = this.props.committeeStore;

    const { raceday } = this.props.committeeStore.currentCommittee;

    for (let i = 0; i < completedTasksPeriods.length; i++) {
      const period = completedTasksPeriods[i];
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
    const { committeeMembers } = this.props.userStore;
    const { raceday } = this.props.committeeStore.currentCommittee;
    const { loading } = this.state;
    const {
      completedTasksPeriods,
      periodCompletedTasks
    } = this.props.committeeStore;

    return (
      <>
        {completedTasksPeriods.length >= 1 ? (
          completedTasksPeriods
            .slice()
            .sort((a, b) => b.max - a.max)
            .map((period, i) => {
              return (
                <div key={i} className={styles.periodBlock}>
                  <div
                    name={period.term}
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
                          {periodCompletedTasks
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
            })
        ) : (
          <CompletedTasksEmpty />
        )}
      </>
    );
  }
}
export default inject(
  `taskStore`,
  `userStore`,
  `committeeStore`
)(observer(CompletedTaskList));
