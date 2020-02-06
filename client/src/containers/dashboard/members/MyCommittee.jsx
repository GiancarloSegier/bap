import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styles from "../platform.module.css";
import Loader from "react-loader-spinner";

import CommitteeDescription from "../../../components/dashboard/committees/overview/CommitteeDescription";
import CommitteeMemberList from "../../../components/dashboard/committees/list/CommitteeMemberList";

class MyCommittee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCommittee: {},
      committeeMembers: [],
      loading: true
    };
  }

  componentDidMount = async () => {
    await this.props.committeeStore.getOne(
      this.props.userStore.authUser.committeeId
    );

    await this.props.committeeStore.getCommitteeMembers(
      this.props.userStore.authUser.committeeId
    );

    const { currentCommittee, committeeMembers } = this.props.committeeStore;
    this.setState({
      currentCommittee: currentCommittee,
      committeeMembers: committeeMembers,
      loading: false
    });
    console.log(this.props.committeeStore.committeeMembers);
  };

  render() {
    const { currentCommittee, committeeMembers, loading } = this.state;
    const invites = this.props.inviteStore.invites;

    const { authUser } = this.props.userStore;
    if (loading) {
      return (
        <div className={styles.centerLoader}>
          <Loader type="Grid" color="#ff3066" height={40} width={40} />
          <p className={styles.loaderLabel}>Loading committee</p>
        </div>
      );
    } else {
      console.log(currentCommittee);
      return (
        <>
          <CommitteeDescription
            committee={currentCommittee}
            committeeMembers={committeeMembers}
            privileges={authUser.job.privileges}
          />

          <CommitteeMemberList
            committee={currentCommittee}
            committeeMembers={committeeMembers}
          />
        </>
      );
    }
    {
      /* <div>
          <h1>MyCommittee</h1>
          <p className={typoStyles.heading1}>Team name: {name}</p>
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
                  <p className={typoStyles.heading1}>Invites:</p>
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
              <p className={typoStyles.heading1}>CommitteeMembers:</p>
              {committeeMembers.map(member => {
                return (
                  <p>
                    {member.name} - {member.surname} - {member.job.assignment}
                  </p>
                );
              })}
            </>
          ) : null}
        </div> */
    }
  }
}

export default inject(
  `userStore`,
  `committeeStore`,
  `inviteStore`
)(observer(MyCommittee));
