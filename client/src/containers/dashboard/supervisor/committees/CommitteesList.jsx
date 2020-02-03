import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import CommitteesListItem from "../../../../components/dashboard/committees/CommitteeListItem";

class CommitteesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { committees } = this.props.committeeStore;
    return (
      <>
        {committees.map(committee => {
          return <CommitteesListItem committee={committee} />;
        })}
      </>
    );
  }
}

export default inject(`committeeStore`)(observer(CommitteesList));
