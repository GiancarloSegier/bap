import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import CommitteeDescription from "../../../../components/dashboard/committees/CommitteeDescription";
import CommitteeMemberList from "../../../../components/dashboard/committees/CommitteeMemberList";
import styles from "../../platform.module.css";
import Loader from "react-loader-spinner";
class CommitteeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCommittee: {},
      committeeMembers: [],
      loading: true
    };
    console.log(this);
  }
  componentDidMount = async () => {
    await this.props.committeeStore.getOne(this.props.committeeId);
    await this.props.committeeStore.getCommitteeMembers(this.props.committeeId);
    const { currentCommittee, committeeMembers } = this.props.committeeStore;
    this.setState({
      currentCommittee: currentCommittee,
      committeeMembers: committeeMembers,
      loading: false
    });
  };
  render() {
    const { currentCommittee, committeeMembers, loading } = this.state;
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

export default inject(`committeeStore`)(observer(CommitteeDetail));
