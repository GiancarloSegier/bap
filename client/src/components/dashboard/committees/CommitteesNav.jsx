import React from "react";

import styles from "./CommitteesNav.module.css";

import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../constants";

const CommitteesNav = () => {
  return (
    <div className={styles.nav}>
      <NavLink
        exact={true}
        className={styles.navLink}
        to={ROUTES.committees}
        activeClassName={styles.active}
      >
        Committees
      </NavLink>
      <NavLink
        exact={true}
        className={styles.navLink}
        to={ROUTES.invitations}
        activeClassName={styles.active}
      >
        Invitations
      </NavLink>
    </div>
  );
};

export default CommitteesNav;
