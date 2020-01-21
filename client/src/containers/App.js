import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home.js";
import Toolkit from "./Toolkit.js";
import { ROUTES } from "../constants";
import DesignStudio from "./DesignStudio.js";
import Login from "./auth/Login";
import Request from "./auth/Request.js";
import NavBar from "../components/Navbar.jsx";
import Register from "./auth/Register.js";

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <Switch>
          <Route path={ROUTES.home} exact strict component={Home} />
          <Route path={ROUTES.toolkit} strict component={Toolkit} />
          <Route path={ROUTES.designstudio} strict component={DesignStudio} />
          <Route path={ROUTES.login} strict component={Login} />
          <Route path={ROUTES.request} strict component={Request} />
          <Route path={ROUTES.register} strict component={Register} />
        </Switch>
      </main>
    );
  }
}

export default App;
