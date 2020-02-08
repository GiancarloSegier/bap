import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import uiStyles from "../../../styles/ui.module.css";
import typoStyles from "../../../styles/typo.module.css";
import taskStyles from "../../../components/dashboard/planner/TaskList.module.css";
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

  componentDidMount = async () => {
    await this.props.taskStore.getAllUserTasks(this.props.userStore.authUser);

    this.getTasks();
  };

  getTasks = () => {
    const { allUserTasks } = this.props.taskStore;
    const { completedTasks } = this.props.committeeStore;
    console.log(completedTasks);

    // const found = allUserTasks.some(r => completedTasks.indexOf(r));

    // console.log(found);

    // console.lgo
    // this.setState({ upcomingTasks: upcomingTasks });
  };

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
    const { allUserTasks } = this.props.taskStore;
    const { greeting } = this.props;
    const { invite, detail, upcomingTasks } = this.state;
    const { announcements } = this.props.announcementStore;
    const { committeeMembers } = this.props.userStore;
    const { raceday } = this.props.committeeStore.currentCommittee;
    const { completedTasks } = this.props.committeeStore;
    console.log(completedTasks);

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
            <Link to={ROUTES.myTasks} className={typoStyles.smallLink}>
              view all
            </Link>
          </div>
          <div className={taskStyles.taskList + " " + taskStyles.noMargin}>
            <ul className={taskStyles.topbar}>
              <li>Done?</li>
              <li>Task</li>
              <li>Assigned to</li>
              <li>Due date?</li>
              <li>Priority</li>
            </ul>

            {allUserTasks

              .sort((a, b) => a.priorityLevel - b.priorityLevel)
              .slice(0, 4)
              .map((task, i) => {
                return (
                  <TaskItem
                    key={i}
                    task={task}
                    members={committeeMembers}
                    raceday={raceday}
                    delay={i * 2}
                  />
                );
              })}
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
  `announcementStore`,
  `committeeStore`,
  `taskStore`
)(observer(MemberDashboard));
