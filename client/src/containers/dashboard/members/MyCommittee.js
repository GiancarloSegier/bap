import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styles from "./MyCommittee.module.css";
import InviteForm from "../../../components/auth/InviteForm";
// import Form from "../components/Form";

class MyCommittee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      committeeId: props.userStore.authUser.committeeId
    };
    this.props.committeeStore.getOne(props.userStore.authUser.committeeId);
    this.props.committeeStore.getCommitteeMembers(
      props.userStore.authUser.committeeId
    );
  }

  render() {
    const { name } = this.props.committeeStore.currentCommittee;
    const invites = this.props.inviteStore.invites;
    const committeeMembers = this.props.committeeStore.committeeMembers;
    return (
      <>
        <div>
          <h1>MyCommittee</h1>
          <p className={styles.heading1}>Team name: {name}</p>
          <br />
          <hr />
          {this.props.userStore.authUser.job.privileges === "admin" ? (
            <>
              <p>Invite new member</p>
              <InviteForm />
              <br />
              <hr />
              {invites.length > 0 ? (
                <>
                  <p className={styles.heading1}>Invites:</p>
                  {invites.map(invite => {
                    return (
                      <p>
                        {invite.name} - {invite.surname} -{" "}
                        {invite.job.assignment}
                      </p>
                    );
                  })}
                </>
              ) : null}
              <br />
              <hr />
            </>
          ) : null}

          {committeeMembers.length > 0 ? (
            <>
              <p className={styles.heading1}>CommitteeMembers:</p>
              {committeeMembers.map(member => {
                return (
                  <p>
                    {member.name} - {member.surname} - {member.job.assignment}
                  </p>
                );
              })}
            </>
          ) : null}
        </div>
      </>
    );
  }
}

export default inject(
  `userStore`,
  `committeeStore`,
  `inviteStore`
)(observer(MyCommittee));
