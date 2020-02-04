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
import Planner from "./dashboard/members/Planner";

import { inject, observer } from "mobx-react";
<<<<<<< HEAD
import CommitteeDetail from "./dashboard/supervisor/committees/CommitteeDetail";
=======
import Announcements from "./dashboard/supervisor/Announcements";
>>>>>>> c03f38bd54d4599c0946ec2412a71fd9996a34c2

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
                strict
                component={DashboardHome}
              />
              <Route path={ROUTES.requests} exact strict component={Requests} />
              
              <Route
                path={ROUTES.committees}
                exact
                strict
                component={Committees}
              />
              <Route
                path={ROUTES.committeeDetail}
                exact
                strict
                render={({ match }) => (
                  <CommitteeDetail committeeId={match.params.id} />
                )}/>
            
             
              <Route
                path={ROUTES.announcements}
                strict
                component={Announcements}
              />
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
                strict
                component={DashboardHome}
              />
              <Route path={ROUTES.myCommittee} strict component={MyCommittee} />
              <Route path={ROUTES.planner} strict component={Planner} />
              <Route path={ROUTES.news} strict component={News} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
};

export default inject(`userStore`)(observer(Dashboard));
