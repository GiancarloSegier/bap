import React, { Component } from "react";

import { inject, observer } from "mobx-react";
import SuperDashboard from "./supervisor/SuperDashboard";
import MemberDashboard from "./members/MemberDashboard";

class DashboardHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello"
    };
  }

  componentDidMount() {
    this.checkDate();
  }
  checkDate = () => {
    const day = new Date();
    const hour = day.getHours();

    let greeting;

    if (hour > 5 && hour < 11) {
      greeting = "Good morning";
    } else if (hour >= 11 && hour <= 18) {
      greeting = "Good afternoon";
    } else if (hour > 18 && hour <= 24) {
      greeting = "Good evening";
    } else if (hour >= 0 && hour <= 5) {
      greeting = "Sleep tight";
    }

    this.setState({ greeting: greeting });
  };

  render() {
    const { greeting } = this.state;
    const { authUser } = this.props.userStore;
    if (authUser.job.privileges === "supervisor") {
      return <SuperDashboard greeting={greeting} />;
    } else {
      return <MemberDashboard greeting={greeting} />;
    }
  }
}

export default inject(`userStore`)(observer(DashboardHome));
