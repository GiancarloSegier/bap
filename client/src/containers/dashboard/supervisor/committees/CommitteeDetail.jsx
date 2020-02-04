import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import CommitteeDescription from "../../../../components/dashboard/committees/CommitteeDescription";
import CommitteeMemberList from "../../../../components/dashboard/committees/CommitteeMemberList";

class CommitteeDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    this.props.committeeStore.getOne(this.props.committeeId);
  }
  render() {
    const { currentCommittee } = this.props.committeeStore;

    return (
      <>
        <CommitteeDescription committee={currentCommittee} />
        <CommitteeMemberList committee={currentCommittee} />
      </>
    );
  }
}

export default inject(`committeeStore`)(observer(CommitteeDetail));
