import React from "react";

import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../../constants";
import styles from "../../platform.module.css";

const PlannerNav = () => {
  return (
    <div className={styles.nav}>
      <NavLink
        exact={true}
        className={styles.navLink}
        to={ROUTES.planner}
        activeClassName={styles.active}
      >
        Timeline
      </NavLink>
      <NavLink
        exact={true}
        className={styles.navLink}
        to={ROUTES.myTasks}
        activeClassName={styles.active}
      >
        My tasks
      </NavLink>
      <NavLink
        exact={true}
        className={styles.navLink}
        to={ROUTES.completedTasks}
        activeClassName={styles.active}
      >
        Completed tasks
      </NavLink>
    </div>
  );
};
export default PlannerNav;
