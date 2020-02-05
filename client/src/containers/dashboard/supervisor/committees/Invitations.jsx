import React from "react";
import CommitteesTop from "../../../../components/dashboard/committees/CommitteesTop";
import { inject, observer } from "mobx-react";
import InvitationListItem from "../../../../components/dashboard/committees/list/InvitationListItem";

import styles from "../../Dashboard.module.css";
import typoStyles from "../../../../styles/typo.module.css";
import InvitationsHeader from "../../../../components/dashboard/committees/InvitationsHeader";

const Invitations = ({ requestStore }) => {
  const { pendingRequests } = requestStore;
  return (
    <>
      <CommitteesTop />
      <InvitationsHeader />

      {pendingRequests.length < 1 ? (
        <>
          <div className={styles.container}>
            <div className={styles.overlay}></div>
            <div className={styles.backgroundEmpty}>
              <div className={styles.stroke}></div>
              <div className={styles.stroke}></div>
              <div className={styles.stroke}></div>
            </div>

            <div className={styles.committeeEmptyContainer}>
              <p className={typoStyles.body}>
                Here you can find an overview of all the race committees that
                you've accepted and waiting to be registered. Seems like all
                your invites have been registered.
              </p>

              <button
                className={typoStyles.buttonInline}
                onClick={this.openInviteForm}
              >
                Invite a new committee
              </button>
              <img
                src="http://placekitten.com/200/200"
                className={styles.emptyImage}
                alt="Location"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {pendingRequests.map((request, i) => {
            return <InvitationListItem key={i} request={request} />;
          })}
        </>
      )}
    </>
  );
};

export default inject(`requestStore`)(observer(Invitations));
