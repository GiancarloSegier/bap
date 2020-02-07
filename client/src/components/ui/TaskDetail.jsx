import React, { Component } from "react";
import modalStyles from "../../styles/modal.module.css";
import formStyles from "./modalForm.module.css";
import styles from "../dashboard/planner/TaskItem.module.css";
import FontAwesome from "react-fontawesome";
import Warning from "./Warning";
import { inject, observer } from "mobx-react";
import memberStyles from "../../styles/members.module.css";
import announceStyles from "../dashboard/announcements/Announcement.module.css";
import TopicsBlock from "../dashboard/planner/TopicsBlock";

class TaskDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    setTimeout(() => {
      this.setState({ fadeIn: true });
    }, 100);
    this.getJobDescription();
  };
  getJobDescription = () => {
    const { task } = this.props;
    const { authUser } = this.props.userStore;
    let description = "";
    // task.assignees.forEach(assignee => {
    //   console.log(assignee.job, authUser.job.assignment);
    //   if (assignee.job === authUser.job.assignment) {
    //     description = assignee.description.split(";");
    //   } else {
    //     description = ["Seems like this isn't your job"];
    //   }
    // });

    task.assignees.forEach(assignee => {
      if (assignee.job === authUser.job.assignment) {
        description = assignee.description.split(";");
        this.setState({ jobDescription: description });
      }
    });
  };

  closeDetail = e => {
    this.setState({ fadeIn: false });
    setTimeout(() => {
      this.props.onClose();
    }, 200);
  };

  render() {
    const { task, priority, dueDate, members } = this.props;
    const { authUser } = this.props.userStore;

    const { fadeIn, jobDescription } = this.state;

    console.log(jobDescription);

    return (
      <>
        <div
          className={
            modalStyles.modalBackground +
            " " +
            (fadeIn ? modalStyles.fadeIn : null)
          }
        >
          <div
            className={
              modalStyles.floatingModal +
              " " +
              modalStyles.biggerModal +
              " " +
              (fadeIn ? modalStyles.fadeIn : null)
            }
          >
            <div className={modalStyles.modalContainer}>
              <div className={formStyles.oneLine}>
                <h3 className={modalStyles.heading3}>{task.title}</h3>

                <button
                  type="button"
                  className={modalStyles.close__button}
                  onClick={this.closeDetail}
                >
                  <span className={modalStyles.decliner}></span>
                </button>
              </div>
              {jobDescription &&
              jobDescription !== "" &&
              jobDescription[0] !== "" ? (
                <>
                  {jobDescription.map(part => {
                    return <p className={styles.description}>{part}</p>;
                  })}
                </>
              ) : (
                <>
                  {task.assignees.filter(a => a.job === authUser.job.assignment)
                    .length > 0 ? (
                    <p className={styles.description}>No further description</p>
                  ) : (
                    <p className={styles.description}>
                      Seems like this isn't your job
                    </p>
                  )}
                </>
              )}

              <div className={styles.metaData}>
                <p className={styles.date}>
                  <FontAwesome name="calendar" className={styles.purple} />{" "}
                  {dueDate}{" "}
                </p>
                <p className={styles.priority + " " + styles[priority]}>
                  {priority}
                </p>
                <div className={styles.memberImages}>
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
                            <div
                              key={index}
                              className={memberStyles.memberBlock}
                            >
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
              </div>
            </div>

            <TopicsBlock />
          </div>
        </div>
      </>
    );
  }
}

export default inject(`userStore`)(observer(TaskDetail));
