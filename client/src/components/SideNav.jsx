import React from "react";

import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject, observer } from "mobx-react";
import styles from "./SideNav.module.css";

import Team from "./sidebar/Team";
const SideNav = ({ userStore }) => {
  return (
    <ul className={styles.sideNav}>
      <li className={styles.marginLogo}>
        <NavLink exact={true} className={styles.logo} to={ROUTES.home}>
          RFTC
        </NavLink>
      </li>
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
            alt=""
          />
          Dashboard
        </NavLink>
      </li>

      {userStore.privileges === "supervisor" ? (
        <>
          <li>
            <NavLink
              className={styles.navLink}
              strict={true}
              to={ROUTES.committees}
              activeClassName={styles.navLink__active}
            >
              <img
                className={styles.navLink__icon}
                src="../assets/icons/nav/committees.png"
                alt=""
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
                alt=""
              />
              Requests
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navLink}
              strict={true}
              to={ROUTES.announcements}
              activeClassName={styles.navLink__active}
            >
              <img
                className={styles.navLink__icon}
                src="../assets/icons/nav/announcements.png"
                alt=""
              />
              Announcements
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
                alt=""
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
                alt=""
              />
              Planner
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navLink}
              strict={true}
              to={ROUTES.announcements}
              activeClassName={styles.navLink__active}
            >
              <img
                className={styles.navLink__icon}
                src="../assets/icons/nav/announcements.png"
                alt=""
              />
              Announcements
            </NavLink>
          </li>
          <Team />
        </>
      )}
    </ul>
  );
};

export default inject(`userStore`)(observer(SideNav));
