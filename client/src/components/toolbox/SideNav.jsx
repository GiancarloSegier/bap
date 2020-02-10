import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./SideNav.module.css";
import FontAwesome from "react-fontawesome";

const SideNav = () => {
  return (
    <div className={styles.sideNav}>
      <NavLink exact={true} className={styles.navLink} to={ROUTES.home}>
        RFTC
      </NavLink>
      <div className={styles.menu}>
        <p>toolbox</p>
      </div>

      <ul className={styles.list}>
        <li>
          <NavLink
            className={styles.navItem}
            exact={true}
            to={ROUTES.welcome}
            activeClassName={styles.navItem_active}
          >
            <img
              className={styles.icon}
              src="../../assets/icons/toolbox/gettingstarted.png"
              alt=""
            />
            <p className={styles.navtitle}>Start here</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.navItem}
            exact={true}
            to={ROUTES.start}
            activeClassName={styles.navItem_active}
          >
            <img
              className={styles.icon}
              src="../../assets/icons/toolbox/gettingstarted.png"
              alt=""
            />
            <p className={styles.navtitle}>starting your event</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.navItem}
            exact={true}
            to={ROUTES.people}
            activeClassName={styles.navItem_active}
          >
            <img
              className={styles.icon}
              src="../../assets/icons/toolbox/people.png"
              alt=""
            />
            <p className={styles.navtitle}>Managing people</p>
          </NavLink>
        </li>
        <li>
          <div className={styles.navItem}>
            <img
              className={styles.icon}
              src="../../assets/icons/toolbox/financial.png"
              alt=""
            />
            <p className={styles.navtitle}>Financials and sponsors</p>
          </div>
        </li>
        <li>
          <div className={styles.navItem}>
            <img
              className={styles.icon}
              src="../../assets/icons/toolbox/security.png"
              alt=""
            />
            <p className={styles.navtitle + " " + styles.small}>
              Legal, Security &amp; Medical Provision
            </p>
          </div>
        </li>
        <li>
          <div className={styles.navItem}>
            <img
              className={styles.icon}
              src="../../assets/icons/toolbox/public.png"
              alt=""
            />
            <p className={styles.navtitle}>Public Relations</p>
          </div>
        </li>
        <li>
          <div className={styles.navItem}>
            <img
              className={styles.icon}
              src="../../assets/icons/toolbox/registration.png"
              alt=""
            />
            <p className={styles.navtitle}>Registrations</p>
          </div>
        </li>
        <li>
          <div className={styles.navItem}>
            <img
              className={styles.icon}
              src="../../assets/icons/toolbox/team.png"
              alt=""
            />
            <p className={styles.navtitle}>Team participants</p>
          </div>
        </li>
        <li>
          <div className={styles.navItem}>
            <img
              className={styles.icon}
              src="../../assets/icons/toolbox/survivor.png"
              alt=""
            />
            <p className={styles.navtitle + " " + styles.small}>
              Breast cancer survivors{" "}
            </p>
          </div>
        </li>
        <li>
          <div className={styles.navItem}>
            <img
              className={styles.icon}
              src="../../assets/icons/toolbox/logistics.png"
              alt=""
            />
            <p className={styles.navtitle}>Race logistics</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
