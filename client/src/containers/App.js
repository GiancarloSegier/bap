import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home.js";
import Toolbox from "./Toolbox.js";
import { ROUTES } from "../constants";
import DesignStudio from "./DesignStudio.js";
import Login from "./auth/Login";
import Request from "./auth/Request.js";
import NavBar from "../components/Navbar.jsx";
import Register from "./auth/Register.js";

import { inject, observer } from "mobx-react";
import Dashboard from "./Dashboard.js";
import NotFound from "./NotFound.js";
import CommitteeDetail from "./dashboard/supervisor/committees/CommitteeDetail.jsx";

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <Switch>
          <Route path={ROUTES.home} exact strict component={Home} />
          <Route path={ROUTES.toolbox} strict component={Toolbox} />
          <Route path={ROUTES.designstudio} strict component={DesignStudio} />
          <Route path={ROUTES.login} strict component={Login} />
          <Route path={ROUTES.request} strict component={Request} />
          <Route path={ROUTES.register} strict component={Register} />
          {this.props.userStore.authUser ? (
            <Route path={ROUTES.dashboard} strict component={Dashboard} />
          ) : null}

          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default inject(`userStore`)(observer(App));
