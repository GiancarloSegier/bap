import React, { Component } from "react";
import CommitteesTop from "../../../../components/dashboard/committees/overview/CommitteesTop";
import { inject, observer } from "mobx-react";
import InvitationListItem from "../../../../components/dashboard/committees/list/InvitationListItem";
import InvitationsHeader from "../../../../components/dashboard/committees/overview/InvitationsHeader";
import InviteCommitteeForm from "../../../../components/ui/InviteCommitteeForm";
import InvitationsEmpty from "../../../../components/dashboard/committees/empty/InvitationsEmpty";

class Invitations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invite: false
    };
  }

  openInviteForm = e => {
    this.setState({ invite: true });
  };
  closeInviteForm = () => {
    this.setState({ invite: false });
  };

  render() {
    const { pendingRequests } = this.props.requestStore;
    const { invite } = this.state;
    return (
      <>
        {invite ? (
          <InviteCommitteeForm onConfirm={this.closeInviteForm} />
        ) : null}
        <CommitteesTop />
        <InvitationsHeader />

        {pendingRequests.length < 1 ? (
          <InvitationsEmpty />
        ) : (
          <>
            {pendingRequests

              .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
              .map((request, i) => {
                return <InvitationListItem key={i} request={request} />;
              })}
          </>
        )}
      </>
    );
  }
}

export default inject(`requestStore`)(observer(Invitations));
