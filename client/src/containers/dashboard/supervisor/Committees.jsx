import React from "react";
import { inject, observer } from "mobx-react";
import CommitteesList from "./committees/CommitteesList";
import CommitteeHeader from "../../../components/dashboard/committees/overview/CommitteeHeader";
import CommitteesTop from "../../../components/dashboard/committees/overview/CommitteesTop";
import CommitteeEmpty from "../../../components/dashboard/committees/empty/CommitteeEmpty";
const Committees = ({ committeeStore }) => {
  const { committees } = committeeStore;
  return (
    <>
      <CommitteesTop />
      {committees.length < 1 ? (
        <>
          <CommitteeHeader />
          <CommitteeEmpty />
        </>
      ) : (
        <CommitteesList />
      )}
    </>
  );
};

export default inject(`committeeStore`)(observer(Committees));
