import React, { Component } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject, observer } from "mobx-react";
import AvatarNav from "./dashboard/AvatarNav";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.getPageInfo);
  };

  getPageInfo = () => {
    if (window.pageYOffset > 50) {
      this.setState({ navBackground: true });
    } else {
      this.setState({ navBackground: false });
    }
  };

  render() {
    const { userStore } = this.props;
    const { navBackground } = this.state;
    return (
      <ul
        className={
          styles.navbar +
          " " +
          (navBackground ? null : styles.background_hidden)
        }
      >
        <li className={styles.logo}>
          <NavLink exact={true} className={styles.navLink} to={ROUTES.home}>
            RFTC
          </NavLink>
        </li>
        <div className={styles.rightMenu}>
          {userStore.authUser ? (
            <li>
              <NavLink
                strict={true}
                className={styles.navLink}
                to={ROUTES.dashboard}
                activeClassName={styles.active}
              >
                Dashboard
              </NavLink>
            </li>
          ) : null}
          <li>
            <NavLink
              strict={true}
              className={styles.navLink}
              to={ROUTES.designstudio}
              activeClassName={styles.active}
            >
              Designstudio
            </NavLink>
          </li>
          <li>
            <NavLink
              strict={true}
              className={styles.navLink}
              to={ROUTES.toolbox}
              activeClassName={styles.active}
            >
              Toolbox
            </NavLink>
          </li>
          {!userStore.authUser ? (
            <>
              <li>
                <NavLink
                  strict={true}
                  className={styles.navLink + " " + styles.purpleLink}
                  to={ROUTES.request}
                >
                  Request acces
                </NavLink>
              </li>
              <li>
                <NavLink
                  strict={true}
                  className={styles.navLink + " " + styles.pinkLink}
                  to={ROUTES.login}
                >
                  Member login
                </NavLink>
              </li>
            </>
          ) : (
            <AvatarNav currentUser={userStore.authUser} />
          )}
        </div>
      </ul>
    );
  }
}
export default inject(`userStore`)(observer(Navbar));
