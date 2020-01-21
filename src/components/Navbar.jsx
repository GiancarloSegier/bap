import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject, observer } from "mobx-react";

const Navbar = ({ userStore }) => {
  console.log(userStore);

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
        <li>
          <NavLink
            exact={true}
            className={styles.navLink}
            to={ROUTES.designstudio}
            activeClassName={styles.active}
          >
            Designstudio
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            className={styles.navLink}
            to={ROUTES.toolkit}
            activeClassName={styles.activeDark}
          >
            Toolkit
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            className={styles.navLink + " " + styles.darkLink}
            to={ROUTES.login}
            activeClassName={styles.activeDark}
          >
            Member login
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            className={styles.navLink + " " + styles.darkLink}
            to={ROUTES.request}
            activeClassName={styles.activeDark}
          >
            Request acces
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default inject(`userStore`)(observer(Navbar));
