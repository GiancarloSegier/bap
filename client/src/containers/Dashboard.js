import React from "react";
// import styles from "./Dashboard.module.css";
// import Form from "../components/Form";
import SideNav from "../components/SideNav";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants";
import Committees from "./dashboard/supervisor/Committees";
import Requests from "./dashboard/supervisor/Requests";
import Updates from "./dashboard/supervisor/Updates";
import DashboardHome from "./dashboard/DashboardHome";
import MyCommittee from "./dashboard/members/MyCommittee";
import News from "./dashboard/members/News";
import Planner from "./dashboard/members/Planner";

import { inject, observer } from "mobx-react";

const Dashboard = ({ userStore }) => {
  const { privileges } = userStore.authUser.job;

  if (privileges === "supervisor") {
    return (
      <>
        <SideNav />
        <Switch>
          <Route
            path={ROUTES.dashboardHome}
            exact
            strict
            component={DashboardHome}
          />
          <Route path={ROUTES.committees} strict component={Committees} />
          <Route path={ROUTES.requests} strict component={Requests} />
          <Route path={ROUTES.updates} strict component={Updates} />
        </Switch>
      </>
    );
  } else if (privileges === "admin") {
    return (
      <>
        <SideNav />
        <Switch>
          <Route
            path={ROUTES.dashboardHome}
            exact
            strict
            component={DashboardHome}
          />
          <Route path={ROUTES.myCommittee} strict component={MyCommittee} />
          <Route path={ROUTES.planner} strict component={Planner} />
          <Route path={ROUTES.news} strict component={News} />
        </Switch>
      </>
    );
  }
};

export default inject(`userStore`)(observer(Dashboard));
