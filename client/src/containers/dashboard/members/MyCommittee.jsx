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
  };

  render() {
    const { currentCommittee, committeeMembers, loading } = this.state;

    const { authUser } = this.props.userStore;
    if (loading) {
      return (
        <div className={styles.centerLoader}>
          <Loader type="Grid" color="#ff3066" height={40} width={40} />
          <p className={styles.loaderLabel}>Loading committee</p>
        </div>
      );
    } else {
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
  }
}

export default inject(
  `userStore`,
  `committeeStore`,
  `inviteStore`
)(observer(MyCommittee));
