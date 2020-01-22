import React from "react";
// import Todos from "../containers/Todos";
// import styles from "./Dashboard.module.css";
// import Form from "../components/Form";
import SideNav from "../components/SideNav";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants";
import Teams from "./dashboard/Teams";
import Requests from "./dashboard/Requests";
import Updates from "./dashboard/Updates";
import DashboardHome from "./dashboard/DashboardHome";

const Dashboard = () => {
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
        <Route path={ROUTES.teams} strict component={Teams} />
        <Route path={ROUTES.requests} strict component={Requests} />
        <Route path={ROUTES.updates} strict component={Updates} />
      </Switch>
    </>
  );
};

export default Dashboard;
