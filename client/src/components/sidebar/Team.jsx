import React, { Component } from "react";
import styles from "./Team.module.css";
import memberStyles from "../../styles/members.module.css";
import FontAwesome from "react-fontawesome";
import { inject, observer } from "mobx-react";
class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const { committeeMembers } = this.props.userStore;
    await this.props.committeeStore.getOne(
      this.props.userStore.authUser.committeeId
    );

    this.setState({ members: committeeMembers });
  };

  render() {
    const { members } = this.state;
    const { currentCommittee } = this.props.committeeStore;

    return (
      <div className={styles.myTeam}>
        <div className={styles.team}>
          <p className={styles.teamName}>{currentCommittee.name}</p>
          <FontAwesome
            className={styles.icon}
            name="edit"
            // onClick={this.onEdit}
          />
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
    );
  }
}
export default inject(`userStore`, `committeeStore`)(observer(Team));
