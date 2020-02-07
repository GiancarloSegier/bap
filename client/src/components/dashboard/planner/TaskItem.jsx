import React, { Component } from "react";
import styles from "../planner/TaskItem.module.css";
import FontAwesome from "react-fontawesome";
import memberStyles from "../../../styles/members.module.css";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.getPriority();
    this.getDueDate();
  };

  getDueDate = () => {
    const { raceday, task } = this.props;

    const minDays = task.period.min;

    const currentRaceday = new Date(raceday);
    const dueDate = new Date(
      currentRaceday.setDate(currentRaceday.getDate() - minDays)
    );

    const day = dueDate.getDate();
    const month = dueDate.getMonth() + 1;
    const year = dueDate.getFullYear();

    const dateString = `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;

    this.setState({ dueDate: dateString });
  };

  getPriority = () => {
    const { priorityLevel } = this.props.task;
    let priority = "";
    if (priorityLevel === 1) {
      priority = "high";
    } else if (priorityLevel === 2) {
      priority = "medium";
    } else {
      priority = "low";
    }

    this.setState({ priority: priority });
  };
  render() {
    const { task, members } = this.props;
    const { priority, dueDate } = this.state;
    console.log(this.props);
    return (
      <>
        <div
          className={styles.task}
          style={{ animationDelay: this.props.delay }}
        >
          <button
            className={styles.check__button + " " + styles.approve}
            onClick={() => console.log("klik")}
          >
            <span className={styles.checker}></span>
          </button>
          <p className={styles.taskname}>{task.title}</p>
          <div className={memberStyles.memberImages}>
            {task.assignees.map((assignee, i) => (
              <>
                {members
                  .slice()
                  .filter(a => a.job.assignment === assignee.job)
                  .map((member, index) => {
                    let job = member.job.assignment
                      .split(" ")
                      .join("")
                      .toLowerCase()
                      .replace("&", "");
                    return (
                      <div key={index} className={memberStyles.memberBlock}>
                        <img
                          src={member.avatarUrl}
                          className={
                            memberStyles.icon +
                            " " +
                            memberStyles.border +
                            " " +
                            memberStyles[job]
                          }
                          width="40"
                          height="40"
                          alt=""
                        />
                        <div className={memberStyles.nameTag}>
                          <span>
                            {member.name} {member.surname}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </>
            ))}
          </div>
          <p className={styles.dueDate}>{dueDate}</p>
          <p className={styles.priority + " " + styles[priority]}>{priority}</p>
        </div>
      </>
    );
  }
}
export default TaskItem;
