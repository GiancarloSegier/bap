import React from "react";
import styles from "./Toolbox.module.css";

import SideNav from "../components/toolbox/SideNav";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants";
import Chapter_People from "./toolbox/Chapter_People";
import Chapter_Start from "./toolbox/Chapter_Start";

const Toolbox = () => {
  return (
    <div className={styles.Toolbox}>
      <div className={styles.sideNav}>
        <SideNav />
      </div>
      <div className={styles.toolboxContent}>
        <Switch>
          <Route path={ROUTES.start} exact component={Chapter_Start} />
          <Route path={ROUTES.people} exact component={Chapter_People} />
        </Switch>
      </div>
    </div>
  );
};

export default Toolbox;
