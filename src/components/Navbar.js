import React, { Component } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

class Navbar extends Component {
  constructor(props) {
    super(props);
    // check if user is logged in for 'member request and login'
  }
  render() {
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
  }
}

export default Navbar;
