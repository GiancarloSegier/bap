import React, { Component } from "react";
import styles from "../planner/TaskItem.module.css";
import FontAwesome from "react-fontawesome";
import memberStyles from "../../../styles/members.module.css";
import TaskDetail from "../../ui/TaskDetail";
import { inject, observer } from "mobx-react";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.getPriority();
    this.getDueDate();
    this.checkCompletedTask();
  };

  checkCompletedTask = () => {
    const { completedTasks } = this.props.committeeStore;
    for (let i = 0; i < completedTasks.length; i++) {
      const task = completedTasks[i];
      if (task.id === this.props.task.id) {
        this.setState({ checked: true });
      }
    }
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

  openDetail = e => {
    this.setState({ detail: true });
  };
  closeDetail = () => {
    this.setState({ detail: false });
  };
  checkTask = (e, task) => {
    e.stopPropagation();
    const { currentCommittee, completedTasks } = this.props.committeeStore;
    const { checked } = this.state;

    const updateTasks = [...completedTasks];

    if (checked) {
      const deletedTaskArray = updateTasks.filter(
        completedTask => completedTask.id !== task.id
      );

      currentCommittee.setCompletedTasks(deletedTaskArray);
    } else {
      updateTasks.push(task);
      currentCommittee.setCompletedTasks(updateTasks);
    }

    this.props.committeeStore.addCompletedTask(currentCommittee, task);

    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  };
  render() {
    const { task, members } = this.props;
    const { priority, dueDate, detail, checked } = this.state;
    const { authUser } = this.props.userStore;

    return (
      <>
        {detail ? (
          <TaskDetail
            onClose={this.closeDetail}
            task={task}
            priority={priority}
            dueDate={dueDate}
            members={members}
            checked={checked}
            onCheckTask={this.checkTask}
          />
        ) : null}
        <div
          className={styles.task}
          style={{ animationDelay: this.props.delay }}
          onClick={this.openDetail}
        >
          <button
            type="button"
            className={
              styles.check__button +
              " " +
              styles.approve +
              " " +
              (checked ? styles.checked : null)
            }
            onClick={e => this.checkTask(e, task)}
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
                          {member.name === authUser.name &&
                          member.surname === authUser.surname ? (
                            <p>me </p>
                          ) : (
                            <p>
                              {member.name} {member.surname}
                            </p>
                          )}
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
export default inject(`userStore`, `committeeStore`)(observer(TaskItem));
