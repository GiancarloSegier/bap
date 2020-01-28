import React from "react";

import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject, observer } from "mobx-react";
import styles from "./SideNav.module.css";

const SideNav = ({ userStore }) => {
  return (
    <ul className={styles.sideNav}>
      <li>
        <NavLink
          className={styles.navLink}
          exact={true}
          to={ROUTES.dashboardHome}
          activeClassName={styles.navLink__active}
        >
          <img
            className={styles.navLink__icon}
            src="../assets/icons/nav/dashboard.png"
          />
          Dashboard
        </NavLink>
      </li>

      {userStore.privileges === "supervisor" ? (
        <>
          <li>
            <NavLink
              className={styles.navLink}
              exact={true}
              to={ROUTES.committees}
              activeClassName={styles.navLink__active}
            >
              <img
                className={styles.navLink__icon}
                src="../assets/icons/nav/committees.png"
              />
              Committees
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navLink}
              strict={true}
              to={ROUTES.requests}
              activeClassName={styles.navLink__active}
            >
              <img
                className={styles.navLink__icon}
                src="../assets/icons/nav/requests.png"
              />
              Requests
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navLink}
              strict={true}
              to={ROUTES.updates}
              activeClassName={styles.navLink__active}
            >
              <img
                className={styles.navLink__icon}
                src="../assets/icons/nav/anouncements.png"
              />
              Anouncements
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              className={styles.navLink}
              strict={true}
              to={ROUTES.myCommittee}
              activeClassName={styles.navLink__active}
            >
              <img
                className={styles.navLink__icon}
                src="../assets/icons/nav/committees.png"
              />
              Committee
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navLink}
              strict={true}
              to={ROUTES.planner}
              activeClassName={styles.navLink__active}
            >
              <img
                className={styles.navLink__icon}
                src="../assets/icons/nav/planner.png"
              />
              Planner
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navLink}
              strict={true}
              to={ROUTES.news}
              activeClassName={styles.navLink__active}
            >
              <img
                className={styles.navLink__icon}
                src="../assets/icons/nav/announcements.png"
              />
              News
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default inject(`userStore`)(observer(SideNav));
