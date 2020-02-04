import React, { Component } from "react";
import styles from "./MemberListItem.module.css";

class MemberListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.listItem}>
        <div className={styles.person}>
          <img
            src="http://placekitten.com/40/40"
            className={styles.icon}
            width="40"
            height="40"
            alt="Different countries"
          />
          <p className={styles.name}>Carlos Siênatsa</p>
        </div>
        <div className={styles.job}>
          <div className={styles.green}></div>
          <p>Event manager</p>
        </div>

        <p>+324 52 63 21 52 </p>
        <p>carlos.siênatsa@rosavida.pr</p>
      </div>
    );
  }
}

export default MemberListItem;
