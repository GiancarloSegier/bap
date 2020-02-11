import React, { Component } from "react";
import styles from "./Team.module.css";
import memberStyles from "../../styles/members.module.css";
import FontAwesome from "react-fontawesome";
import { inject, observer } from "mobx-react";
import EditCommitteeForm from "../ui/EditCommitteeForm";
class Team extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
  }

  componentDidMount = async () => {
    const { committeeMembers } = this.props.userStore;
    await this.props.committeeStore.getOne(
      this.props.userStore.authUser.committeeId
    );

    this.setState({ members: committeeMembers });
  };

  openEditForm = e => {
    this.setState({ edit: true });
  };
  closeEditForm = () => {
    this.setState({ edit: false });
  };

  render() {
    const { members, edit } = this.state;
    const { currentCommittee } = this.props.committeeStore;
    const { authUser } = this.props.userStore;

    return (
      <>
        {edit && authUser.job.privileges === "admin" ? (
          <EditCommitteeForm onConfirm={this.closeEditForm} />
        ) : null}
        <div className={styles.myTeam}>
          <div className={styles.team}>
            <p className={styles.teamName}>{currentCommittee.name}</p>
            {authUser.job.privileges === "admin" ? (
              <FontAwesome
                className={styles.editIcon}
                name="edit"
                onClick={this.openEditForm}
              />
            ) : null}
          </div>

          <p className={styles.location}>
            <span className={styles.bold}>{currentCommittee.country}</span> -{" "}
            {currentCommittee.city}
          </p>
          <div className={styles.memberImages}>
            {members ? (
              <>
                {members.map((member, i) => {
                  let job = member.job.assignment
                    .split(" ")
                    .join("")
                    .toLowerCase()
                    .replace("&", "");
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
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
export default inject(`userStore`, `committeeStore`)(observer(Team));
