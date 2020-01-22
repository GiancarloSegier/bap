import React from "react";
// import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject, observer } from "mobx-react";
import styles from "./SideNav.module.css";

const SideNav = ({ userStore }) => {
  return (
    <ul className={styles.sideNav}>
      <div className={styles.rightMenu}>
        <li>
          <NavLink
            exact={true}
            className={styles.navLink}
            to={ROUTES.dashboardHome}
            activeClassName={styles.active}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            className={styles.navLink}
            to={ROUTES.teams}
            activeClassName={styles.active}
          >
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            className={styles.navLink}
            to={ROUTES.requests}
            activeClassName={styles.active}
          >
            Requests
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            className={styles.navLink}
            to={ROUTES.updates}
            activeClassName={styles.active}
          >
            Updates
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default inject(`userStore`)(observer(SideNav));
