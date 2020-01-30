import React from "react";
import styles from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject, observer } from "mobx-react";
import AvatarNav from "./dashboard/AvatarNav";

const Navbar = ({ userStore }) => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.logo}>
        <NavLink exact={true} className={styles.navLink} to={ROUTES.home}>
          RFTC
        </NavLink>
      </li>
      <div className={styles.rightMenu}>
        {userStore.authUser ? (
          <li>
            <NavLink
              strict={true}
              className={styles.navLink}
              to={ROUTES.dashboard}
              activeClassName={styles.active}
            >
              Dashboard
            </NavLink>
          </li>
        ) : null}
        <li>
          <NavLink
            strict={true}
            className={styles.navLink}
            to={ROUTES.designstudio}
            activeClassName={styles.active}
          >
            Designstudio
          </NavLink>
        </li>
        <li>
          <NavLink
            strict={true}
            className={styles.navLink}
            to={ROUTES.toolbox}
            activeClassName={styles.active}
          >
            Toolbox
          </NavLink>
        </li>
        {!userStore.authUser ? (
          <>
            <li>
              <NavLink
                strict={true}
                className={styles.navLink + " " + styles.purpleLink}
                to={ROUTES.request}
                // activeClassName={styles.activeDark}
              >
                Request acces
              </NavLink>
            </li>
            <li>
              <NavLink
                strict={true}
                className={styles.navLink + " " + styles.pinkLink}
                to={ROUTES.login}
                // activeClassName={styles.activeDark}
              >
                Member login
              </NavLink>
            </li>
          </>
        ) : (
          <AvatarNav
            currentUser={userStore.authUser}
            onLogout={userStore.logout}
          />
        )}
      </div>
    </ul>
  );
};

export default inject(`userStore`)(observer(Navbar));
