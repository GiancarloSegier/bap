import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import uiStyles from "../../../styles/ui.module.css";
import typoStyles from "../../../styles/typo.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { inject, observer } from "mobx-react";
import InviteForm from "../../../components/ui/InviteForm";
import TaskItem from "../../../components/dashboard/planner/TaskItem";
import AnnouncementSmall from "../../../components/dashboard/announcements/AnnouncementSmall";
import AnnouncementDetail from "../../../components/ui/AnnouncementDetail";
class MemberDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { invite: false, detail: false };
  }

  openInviteForm = e => {
    this.setState({ invite: true });
  };
  closeInviteForm = () => {
    this.setState({ invite: false });
  };
  onView = announcement => {
    this.setState({ detail: true, current: announcement });
  };
  closeForm = () => {
    this.setState({ detail: false });
  };

  render() {
    const { authUser, privileges } = this.props.userStore;
    const { greeting } = this.props;
    const { invite, detail } = this.state;
    const { announcements } = this.props.announcementStore;
    console.log(privileges);
    return (
      <>
        {detail ? (
          <AnnouncementDetail
            privileges={privileges}
            announcement={this.state.current}
            onClose={this.closeForm}
          />
        ) : null}

        {invite ? <InviteForm onConfirm={this.closeInviteForm} /> : null}
        <div className={styles.oneLine}>
          <h1 className={typoStyles.heading1}>
            {greeting} {authUser.name}.
          </h1>
          {privileges === "admin" ? (
            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={uiStyles.textButton + " " + uiStyles.purple}
                onClick={this.openInviteForm}
              >
                <span className={uiStyles.button__icon}>+</span>Invite member
              </button>
              <button
                type="button"
                className={uiStyles.textButton}
                // onClick={this.openInviteForm}
              >
                <span className={uiStyles.button__icon}>+</span>Create new task
              </button>
            </div>
          ) : null}
        </div>
        <section>
          <div className={styles.oneLine}>
            <h2 className={typoStyles.heading2}>Upcoming tasks</h2>
            <Link to={ROUTES.planner} className={typoStyles.smallLink}>
              view all
            </Link>
          </div>
          <div className={styles.taskList}>
            <ul className={styles.topbar}>
              <li>Done?</li>
              <li>Task</li>
              <li>Assigned to</li>
              <li>Due date?</li>
              <li>Priority</li>
            </ul>
            {/* <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem /> */}
          </div>
        </section>
        <section className={styles.borderTop}>
          <div className={styles.oneLine}>
            <h2 className={typoStyles.heading2}>Latest news</h2>
            <Link to={ROUTES.announcements} className={typoStyles.smallLink}>
              view all
            </Link>
          </div>
          <div className={styles.announcementGrid}>
            {announcements.slice(0, 3).map((announcement, i) => {
              return (
                <AnnouncementSmall
                  key={i}
                  onView={() => this.onView(announcement)}
                  announcement={announcement}
                />
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default inject(
  `userStore`,
  `announcementStore`
)(observer(MemberDashboard));
