import React, { Component } from "react";
import styles from "../planner/TaskItem.module.css";
import FontAwesome from "react-fontawesome";
class TaskItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
          <p className={styles.taskname}>Add your first member to the team</p>
          <div className={styles.memberImages}>
            members
            {/* {members ? (
            <>
              {members.map((member, i) => {
                let job = member.job.assignment
                  .split(" ")
                  .join("")
                  .toLowerCase();
                return (
                  <div key={i} className={styles.memberBlock}>
                    <img
                      src={member.avatarUrl}
                      className={
                        styles.icon +
                        " " +
                        memberStyles.border +
                        " " +
                        memberStyles[job]
                      }
                      width="40"
                      height="40"
                      alt="Different countries"
                    />
                    <div className={styles.nameTag}>
                      <span>
                        {member.name} {member.surname}
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null} */}
          </div>
          <p className={styles.dueDate}>29-09-20</p>
          <p className={styles.priority + " " + styles.medium}>medium</p>
        </div>
      </>
    );
  }
}
export default TaskItem;
