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

  getPeriod = e => {
    console.log(e.target.value);
    this.props.taskStore.getPeriodTasks(e.target.value);
  };

  render() {
    const { periodTasks } = this.props.taskStore;
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

            <button type="button" onClick={this.getPeriod} value="12-9 Months">
              12-9 Months
            </button>
            <button type="button" onClick={this.getPeriod} value="9-8 Months">
              9-8 Months
            </button>
            <button type="button" onClick={this.getPeriod} value="7 Months">
              7 Months
            </button>
            <button type="button" onClick={this.getPeriod} value="6 Months">
              6 Months
            </button>
            <button type="button" onClick={this.getPeriod} value="5 Months">
              5 Months
            </button>
            <button type="button" onClick={this.getPeriod} value="4 Months">
              4 Months
            </button>
            <button type="button" onClick={this.getPeriod} value="3 Months">
              3 Months
            </button>
            <button type="button" onClick={this.getPeriod} value="2 Months">
              2 Months
            </button>
            <button type="button" onClick={this.getPeriod} value="1 Month">
              1 Month
            </button>
            <button type="button" onClick={this.getPeriod} value="2 Weeks">
              2 Weeks
            </button>
            <button type="button" onClick={this.getPeriod} value="1 Week">
              1 Week
            </button>
            <button type="button" onClick={this.getPeriod} value="Day before">
              Day before
            </button>
            <button type="button" onClick={this.getPeriod} value="Race day">
              Race day
            </button>
            <button type="button" onClick={this.getPeriod} value="Post race">
              Post race
            </button>

            {periodTasks
              .slice()
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
