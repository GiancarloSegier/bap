import React from "react";
import styles from "./CommitteeMemberList.module.css";
import MemberListItem from "./MemberListItem";
const CommitteeMemberList = ({ committeeMembers }) => {
  return (
    <>
      <ul className={styles.topbar}>
        <li>Name</li>
        <li>Function</li>
        <li>phone number</li>
        <li>e-mail</li>
      </ul>
      {committeeMembers.map((member, i) => {
        return <MemberListItem key={i} member={member} />;
      })}
    </>
  );
};
export default CommitteeMemberList;
