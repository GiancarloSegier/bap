import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import styles from "./Request.module.css";
class RequestEmpty extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.emptyCard} onClick={this.props.openInviteForm}>
        <div className={styles.icon}>
          <span className={styles.cross_line}></span>
          <span className={styles.cross_line}></span>
        </div>
        <p>Create a new committee to invite their event managers</p>
      </div>
    );
  }
}

export default inject(`committeeStore`)(observer(RequestEmpty));
