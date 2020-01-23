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
        {userStore.privileges === "supervisor" ? (
          <>
            <li>
              <NavLink
                strict={true}
                className={styles.navLink}
                to={ROUTES.teams}
                activeClassName={styles.active}
              >
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink
                strict={true}
                className={styles.navLink}
                to={ROUTES.requests}
                activeClassName={styles.active}
              >
                Requests
              </NavLink>
            </li>
            <li>
              <NavLink
                strict={true}
                className={styles.navLink}
                to={ROUTES.updates}
                activeClassName={styles.active}
              >
                Updates
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                strict={true}
                className={styles.navLink}
                to={ROUTES.teams}
                activeClassName={styles.active}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                strict={true}
                className={styles.navLink}
                to={ROUTES.requests}
                activeClassName={styles.active}
              >
                Planner
              </NavLink>
            </li>
            <li>
              <NavLink
                strict={true}
                className={styles.navLink}
                to={ROUTES.updates}
                activeClassName={styles.active}
              >
                News
              </NavLink>
            </li>
          </>
        )}
      </div>
    </ul>
  );
};

export default inject(`userStore`)(observer(SideNav));
