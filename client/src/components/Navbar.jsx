import React from "react";
import styles from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject, observer } from "mobx-react";

const Navbar = ({ userStore }) => {
  const handleLogout = e => {
    userStore.logout();
  };

  return (
    <ul className={styles.navbar}>
      <li className={styles.logo}>
        <NavLink
          exact={true}
          className={styles.navLink}
          to={ROUTES.home}
          activeClassName={styles.active}
        >
          Logo
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
            to={ROUTES.toolkit}
            activeClassName={styles.active}
          >
            Toolkit
          </NavLink>
        </li>
        {!userStore.authUser ? (
          <>
            <li>
              <NavLink
                strict={true}
                className={styles.navLink + " " + styles.darkLink}
                to={ROUTES.login}
                activeClassName={styles.activeDark}
              >
                Member login
              </NavLink>
            </li>
            <li>
              <NavLink
                strict={true}
                className={styles.navLink + " " + styles.darkLink}
                to={ROUTES.request}
                activeClassName={styles.activeDark}
              >
                Request acces
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <img
              className={styles.avatar}
              src={userStore.authUser.avatarUrl}
              alt={`Avatar from ${userStore.authUser.name}`}
            />
            <p className={styles.navLink}>{userStore.authUser.name}</p>

            <a
              href="http://localhost:4000"
              onClick={handleLogout}
              className={styles.navLink + " " + styles.darkLink}
            >
              Log out
            </a>
          </>
        )}
      </div>
    </ul>
  );
};

export default inject(`userStore`)(observer(Navbar));
