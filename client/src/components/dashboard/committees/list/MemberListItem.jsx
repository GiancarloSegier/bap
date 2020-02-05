import React from "react";
import styles from "./MemberListItem.module.css";
import memberStyles from "../../../../styles/members.module.css";

const MemberListItem = ({ member }) => {
  const job = member.job.assignment
    .split(" ")
    .join("")
    .toLowerCase()
    .replace("&", "");

  return (
    <div className={styles.listItem}>
      <div className={styles.person}>
        <img
          src={member.avatarUrl}
          className={
            styles.icon + " " + memberStyles.border + " " + memberStyles[job]
          }
          width="40"
          height="40"
          alt="Different countries"
        />
        <p className={styles.name}>
          {member.name} {member.surname}
        </p>
      </div>
      <div className={styles.job}>
        <div className={memberStyles.dot + " " + memberStyles[job]}></div>
        <p>{member.job.assignment}</p>
      </div>

      <p>{member.phone}</p>
      <p>{member.email}</p>
    </div>
  );
};

export default MemberListItem;
