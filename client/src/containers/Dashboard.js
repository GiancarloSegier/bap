import React from "react";
import styles from "./Dashboard.module.css";
// import Form from "../components/Form";
import SideNav from "../components/SideNav";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants";
import Committees from "./dashboard/supervisor/Committees";
import Requests from "./dashboard/supervisor/Requests";

import DashboardHome from "./dashboard/DashboardHome";
import MyCommittee from "./dashboard/members/MyCommittee";
import News from "./dashboard/members/News";
import Planner from "./dashboard/members/planner/Planner";

import { inject, observer } from "mobx-react";
import CommitteeDetail from "./dashboard/supervisor/committees/CommitteeDetail";
import Announcements from "./dashboard/Announcements";
import Invitations from "./dashboard/supervisor/committees/Invitations";
import MyTasks from "./dashboard/members/planner/MyTasks";
import CompletedTasks from "./dashboard/members/planner/CompletedTasks";

const Dashboard = ({ userStore }) => {
  const { privileges } = userStore.authUser.job;

  if (privileges === "supervisor") {
    return (
      <div className={styles.dashboardGrid}>
        <div className={styles.dashboardNav}>
          <SideNav />
        </div>
        <div className={styles.dashboardContent}>
          <div className={"container"}>
            <Switch>
              <Route
                path={ROUTES.dashboardHome}
                exact
                component={DashboardHome}
              />
              <Route path={ROUTES.requests} exact component={Requests} />

              <Route path={ROUTES.committees} exact component={Committees} />
              <Route
                path={ROUTES.committeeDetail}
                exact
                render={({ match }) => (
                  <CommitteeDetail committeeId={match.params.id} />
                )}
              />
              <Route path={ROUTES.invitations} exact component={Invitations} />

              <Route path={ROUTES.announcements} component={Announcements} />
            </Switch>
          </div>
        </div>
      </div>
    );
  } else if (privileges === "admin" || privileges === "member") {
    return (
      <div className={styles.dashboardGrid}>
        <div className={styles.dashboardNav}>
          <SideNav />
        </div>
        <div className={styles.dashboardContent}>
          <div className="container">
            <Switch>
              <Route
                path={ROUTES.dashboardHome}
                exact
                component={DashboardHome}
              />
              <Route path={ROUTES.myCommittee} exact component={MyCommittee} />
              <Route path={ROUTES.planner} exact component={Planner} />
              <Route path={ROUTES.myTasks} exact component={MyTasks} />
              <Route
                path={ROUTES.completedTasks}
                exact
                component={CompletedTasks}
              />
              <Route
                path={ROUTES.announcements}
                exact
                component={Announcements}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
};

export default inject(`userStore`)(observer(Dashboard));
