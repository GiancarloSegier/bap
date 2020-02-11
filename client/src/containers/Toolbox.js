import React from "react";
import styles from "./Toolbox.module.css";

import SideNav from "../components/toolbox/SideNav";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants";
import ChapterPeople from "./toolbox/ChapterPeople";
import ChapterStart from "./toolbox/ChapterStart";
import Welcome from "./toolbox/Welcome";
import EventManager from "./toolbox/EventManager";

const Toolbox = () => {
  window.scrollTo(0, 0);
  return (
    <div className={styles.Toolbox}>
      <div className={styles.sideNav}>
        <SideNav />
      </div>
      <div className={styles.toolboxContent}>
        <Switch>
          <Route path={ROUTES.welcome} exact component={Welcome} />
          <Route path={ROUTES.start} exact component={ChapterStart} />
          <Route path={ROUTES.people} exact component={ChapterPeople} />
          <Route path={ROUTES.detail} exact component={EventManager} />
        </Switch>
      </div>
    </div>
  );
};

export default Toolbox;
