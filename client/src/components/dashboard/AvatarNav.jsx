import React, { Component } from "react";
import styles from "./AvatarNav.module.css";
import FontAwesome from "react-fontawesome";

class AvatarNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false
    };
  }

  handleLogout = e => {
    this.props.onLogout();
  };

  render() {
    const { currentUser } = this.props;
    // const job = currentUser.job.assignment
    //   .split(" ")
    //   .join("")
    //   .toLowerCase();
    return (
      <>
        <div className={styles.avatarGroup}>
          <FontAwesome name="bell" className={styles.purple} />
          <img
            className={styles.avatar}
            src={currentUser.avatarUrl}
            alt={`Avatar from ${currentUser.name}`}
          />
          <button
            type="button"
            className={styles.dropDown}
            onClick={() =>
              this.setState(prevstate => ({
                dropDown: !prevstate.dropDown
              }))
            }
          >
            <FontAwesome
              name="chevron-down"
              className={
                styles.purple +
                " " +
                (this.state.dropDown
                  ? styles.chevron__open
                  : styles.chevron__close)
              }
            />
          </button>

          <div
            className={
              styles.modal +
              " " +
              (this.state.dropDown
                ? styles.dropDown__open
                : styles.dropDown__close)
            }
          >
            <div>
              <a
                href="http://localhost:4000"
                onClick={this.handleLogout}
                className={styles.dropDownLink + " " + styles.modalContainer}
              >
                <FontAwesome name="cog" className={styles.purple} />
                Settings
              </a>
            </div>
            <div className={styles.divideBorder}>
              <a
                href="http://localhost:4000"
                onClick={this.handleLogout}
                className={styles.dropDownLink + " " + styles.modalContainer}
              >
                <FontAwesome name="power-off" className={styles.purple} />
                Log out
              </a>
            </div>
          </div>
        </div>

        {/* <a
          href="http://localhost:4000"
          onClick={this.handleLogout}
          className={styles.navLink + " " + styles.darkLink}
        >
          Log out
        </a> */}
      </>
    );
  }
}

export default AvatarNav;
