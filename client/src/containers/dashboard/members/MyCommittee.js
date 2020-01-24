import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styles from "./MyCommittee.module.css";
// import Form from "../components/Form";

class MyCommittee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      committeeId: props.userStore.authUser.committeeId
    };
    this.props.committeeStore.getOne(props.userStore.authUser.committeeId);
  }

  render() {
    const { name } = this.props.committeeStore.currentCommittee;
    return (
      <>
        <div>
          <h1>MyCommittee</h1>
          <p className={styles.heading1}>Team name: {name}</p>
        </div>
      </>
    );
  }
}

export default inject(`userStore`, `committeeStore`)(observer(MyCommittee));
