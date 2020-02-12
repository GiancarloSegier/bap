import React, { Component } from "react";
import styles from "./AvatarNav.module.css";
import memberStyles from "../../styles/members.module.css";

import FontAwesome from "react-fontawesome";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../../constants";

class AvatarNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false
    };
    this.navLink = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = e => {
    if (e.target !== this.navLink.current) {
      this.setState({ dropDown: false });
    }
  };

  handleLogout = async e => {
    e.preventDefault();
    window.location.href = ROUTES.home;
    await this.props.userStore.logout();
  };

  render() {
    const { authUser } = this.props.userStore;
    const job = authUser.job.assignment
      .split(" ")
      .join("")
      .toLowerCase()
      .replace("&", "");

    return (
      <>
        <div className={styles.avatarGroup} ref={this.navLink}>
          <FontAwesome name="bell" className={styles.purple} />
          <img
            className={
              styles.avatar +
              " " +
              memberStyles.border +
              " " +
              memberStyles[job]
            }
            src={authUser.avatarUrl}
            alt={`Avatar from ${authUser.name}`}
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
                href="/"
                onClick={this.handleLogout}
                className={styles.dropDownLink + " " + styles.modalContainer}
              >
                <FontAwesome name="cog" className={styles.purple} />
                Settings
              </a>
            </div>
            <div className={styles.divideBorder}>
              <a
                href="/"
                onClick={this.handleLogout}
                className={styles.dropDownLink + " " + styles.modalContainer}
              >
                <FontAwesome name="power-off" className={styles.purple} />
                Log out
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default inject(`userStore`)(observer(AvatarNav));
