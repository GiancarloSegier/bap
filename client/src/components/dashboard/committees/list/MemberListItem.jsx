import React, { Component } from "react";

import styles from "./MemberListItem.module.css";
import memberStyles from "../../../../styles/members.module.css";
import FontAwesome from "react-fontawesome";
import { inject, observer } from "mobx-react";
import Warning from "../../../ui/Warning";

class MemberListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editJob: false,
      warning: false
    };
    this.jobInput = React.createRef();
  }

  onEditJob = () => {
    this.setState({
      editJob: true
    });
  };

  cancelEdit = () => {
    this.setState({
      editJob: false
    });
  };
  showWarning = () => {
    this.setState({ warning: true });
  };
  onCancel = () => {
    setTimeout(() => {
      this.setState({ warning: false });
    }, 200);
  };

  saveChanges = async e => {
    const job = {
      assignment: this.jobInput.current.value,
      privileges: "member"
    };

    const { member, index } = this.props;

    member.setJob(job);

    await this.props.userStore.updateUser(member);
    await this.props.userStore.updateCommitteeMembers(index, member);

    this.setState({
      editJob: false
    });
  };

  onDeleteMember = async () => {
    this.props.onDeleteMember(this.props.member);
  };

  render() {
    const { editJob, warning } = this.state;
    const { member } = this.props;
    const { privileges } = this.props.userStore.authUser.job;

    return (
      <>
        {warning ? (
          <Warning
            onContinue={this.onDeleteMember}
            onCancel={this.onCancel}
            message="Are you sure you want to delete this member? This can not be undone!"
          />
        ) : null}

        {privileges === "supervisor" || privileges === "member" ? null : (
          <div className={styles.icons}>
            <FontAwesome
              className={styles.icon}
              name="trash"
              //onClick={this.onView}
            />
            <FontAwesome
              className={styles.icon}
              name="edit"
              // onClick={this.onEdit}
            />
          </div>
        )}
        <div className={styles.listItem}>
          <div className={styles.person}>
            <img
              src={member.avatarUrl}
              className={
                styles.avatar +
                " " +
                memberStyles.border +
                " " +
                memberStyles[
                  member.job.assignment
                    .split(" ")
                    .join("")
                    .toLowerCase()
                    .replace("&", "")
                ]
              }
              width="40"
              height="40"
              alt="Different countries"
            />
            <p className={styles.name}>
              {member.name} {member.surname}
            </p>
          </div>
          <div className={styles.job}>
            {!editJob ? (
              <div className={styles.editableBlock}>
                <div
                  className={
                    memberStyles.dot +
                    " " +
                    memberStyles[
                      member.job.assignment
                        .split(" ")
                        .join("")
                        .toLowerCase()
                        .replace("&", "")
                    ]
                  }
                ></div>
                <p className={styles.jobName}>{member.job.assignment}</p>
                {privileges === "admin" &&
                member.job.assignment !== "Race coordinator" &&
                member.job.assignment !== "Event manager" ? (
                  <FontAwesome
                    className={styles.icon}
                    name="pencil"
                    onClick={this.onEditJob}
                  />
                ) : null}
              </div>
            ) : (
              <div className={styles.inlineEdit}>
                <select
                  name="job"
                  id="job"
                  ref={this.jobInput}
                  // onChange={this.handleChangeJob}
                  className={styles.job__input}
                  defaultValue={member.job.assignment}
                >
                  {this.props.jobStore.jobs.map((job, i) => {
                    if (job.privileges === "member") {
                      return (
                        <option key={i} value={`${job.assignment}`}>
                          {job.assignment}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </select>
                <div className={styles.buttons}>
                  <button
                    className={styles.edit__button + " " + styles.decline}
                    onClick={this.cancelEdit}
                  >
                    <span className={styles.decliner}></span>
                  </button>

                  <button
                    className={styles.edit__button + " " + styles.approve}
                    onClick={this.saveChanges}
                  >
                    <span className={styles.checker}></span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <p>{member.phone}</p>
          <p>{member.email}</p>

          {privileges === "admin" &&
          member.job.assignment !== "Race coordinator" &&
          member.job.assignment !== "Event manager" ? (
            <div className={styles.icons}>
              <FontAwesome
                className={styles.icon}
                name="trash"
                onClick={this.showWarning}
              />
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

export default inject(
  `userStore`,
  `jobStore`,
  `committeeStore`
)(observer(MemberListItem));
