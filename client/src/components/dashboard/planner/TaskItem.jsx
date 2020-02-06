import React, { Component } from "react";
import styles from "../planner/TaskItem.module.css";
import FontAwesome from "react-fontawesome";
import memberStyles from "../../../styles/members.module.css";

class TaskItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { task, members } = this.props;
    return (
      <>
        <div className={styles.task}>
          <div>
            <FontAwesome
              className={styles.icon}
              name="check-circle"
              onClick={this.onView}
            />
          </div>
          <p className={styles.taskname}>{task.title}</p>
          <div className={memberStyles.memberImages}>
            {task.assignees.map((assignee, i) => (
              <>
                {members
                  .slice()
                  .filter(a => a.job.assignment === assignee.job)
                  .map(member => {
                    let job = member.job.assignment
                      .split(" ")
                      .join("")
                      .toLowerCase()
                      .replace("&", "");
                    console.log(job);
                    return (
                      <div key={i} className={memberStyles.memberBlock}>
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
                          alt="Different countries"
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
          <p className={styles.dueDate}>29-09-20</p>
          <p className={styles.priority + " " + styles.medium}>medium</p>
        </div>
      </>
    );
  }
}
export default TaskItem;
