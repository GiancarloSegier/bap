import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import typoStyles from "../../../styles/typo.module.css";

import { inject, observer } from "mobx-react";

class MemberDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { greeting } = this.props;
    const { authUser } = this.props.userStore;
    return (
      <>
        <div className={styles.oneLine}>
          <h1 className={typoStyles.heading1}>
            {greeting} {authUser.name}.
          </h1>
        </div>
      </>
    );
  }
}

export default inject(`userStore`, `requestStore`)(observer(MemberDashboard));
