import React, { Component } from "react";
import styles from "./CommitteeDescription.module.css";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import uiStyles from "../../../../styles/ui.module.css";
import { ROUTES } from "../../../../constants/index";
import typoStyles from "../../../../styles/typo.module.css";
import Warning from "../../../ui/Warning";
import { inject, observer } from "mobx-react";
import InviteForm from "../../../ui/InviteForm";
import EditCommitteeForm from "../../../ui/EditCommitteeForm";

class CommitteeDescription extends Component {
  constructor(props) {
    super(props);
    this.state = { warning: false };
  }

  componentDidMount = () => {
    this.getDate();
  };
  showWarning = () => {
    this.setState({ warning: true });
  };

  onDeleteCommittee = async () => {
    const { committee, committeeMembers } = this.props;
    await this.props.committeeStore.deleteCommittee(committee);
    await this.props.userStore.deleteMemberUsers(committeeMembers);

    setTimeout(() => {
      window.location.href = ROUTES.committees;
    }, 1000);
  };

  openInviteForm = e => {
    this.setState({ invite: true });
  };
  closeInviteForm = () => {
    this.setState({ invite: false });
  };
  openEditForm = e => {
    this.setState({ edit: true });
  };
  closeEditForm = () => {
    this.getDate();
    this.setState({ edit: false });
  };

  onCancel = () => {
    setTimeout(() => {
      this.setState({ warning: false });
    }, 200);
  };
  getDate() {
    const { committee } = this.props;
    const raceDate = new Date(committee.raceday);
    const day = raceDate.getDate();
    const month = raceDate.getMonth() + 1;
    const year = raceDate.getFullYear();

    const dateString = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;

    this.setState({ dateString: dateString });
  }

  render() {
    const { committee, committeeMembers, privileges } = this.props;
    const { warning, invite, edit, dateString } = this.state;

    return (
      <>
        {invite && privileges === "admin" ? (
          <InviteForm onConfirm={this.closeInviteForm} />
        ) : null}
        {edit && privileges === "admin" ? (
          <EditCommitteeForm onConfirm={this.closeEditForm} />
        ) : null}
        {warning && privileges === "supervisor" ? (
          <Warning
            onContinue={this.onDeleteCommittee}
            onCancel={this.onCancel}
            message="Are you sure you want to delete this committee?"
          />
        ) : null}

        <div className={styles.oneLine}>
          {privileges === "supervisor" ? (
            <Link to={ROUTES.committees} className={styles.back}>
              <FontAwesome name="chevron-left" className={styles.arrow} />
              back to overview
            </Link>
          ) : (
            <h1 className={typoStyles.heading2}>My Committee</h1>
          )}
          {privileges === "admin" ? (
            <div className={styles.buttonGroup}>
              {privileges === "supervisor" ? (
                <button
                  type="button"
                  className={styles.textButton}
                  onClick={this.showWarning}
                >
                  <FontAwesome name="trash" className={styles.trash} />
                  Remove committee
                </button>
              ) : privileges === "admin" ? (
                <>
                  <button
                    type="button"
                    className={uiStyles.textButton + " " + uiStyles.purple}
                    onClick={this.openInviteForm}
                  >
                    <span className={uiStyles.button__icon}>+</span>Invite
                    member
                  </button>
                  <button
                    type="button"
                    className={uiStyles.textButton + " " + uiStyles.pink}
                    onClick={this.openEditForm}
                  >
                    <FontAwesome className={uiStyles.iconLight} name="pencil" />
                    Edit info
                  </button>
                </>
              ) : null}
            </div>
          ) : null}
        </div>

        <h1 className={styles.title}>{committee.name}</h1>
        <div className={styles.oneLine}>
          <div>
            <div className={styles.info}>
              <div className={styles.stat + " " + styles.city}>
                <img
                  src="../../../assets/icons/stats/countries.png"
                  className={styles.icon}
                  width="40"
                  height="40"
                  alt="Location"
                />
                <div className={styles.stat_info}>
                  <p className={styles.subtitle}>
                    {committee.country ? committee.country : "location"}
                  </p>
                  <p className={styles.data}>
                    {committee.city ? committee.city : "-"}
                  </p>
                </div>
              </div>
              <div className={styles.stat + " " + styles.raceday}>
                <img
                  src="../../../assets/icons/stats/date.png"
                  className={styles.icon}
                  width="40"
                  height="40"
                  alt="Location"
                />
                <div className={styles.stat_info}>
                  <p className={styles.subtitle}>Raceday</p>
                  <p className={styles.data}>{dateString}</p>
                </div>
              </div>
              <div className={styles.stat + " " + styles.members}>
                <img
                  src="../../../assets/icons/stats/committees.png"
                  className={styles.icon}
                  width="40"
                  height="40"
                  alt="Location"
                />
                <div className={styles.stat_info}>
                  <p className={styles.subtitle}>Members</p>
                  <p className={styles.data}>{committeeMembers.length}</p>
                </div>
              </div>
            </div>
            {committee.description !== "" ? (
              <p className={styles.description}>{committee.description}</p>
            ) : privileges === "supervisor" || privileges === "member" ? (
              <p>No description yet</p>
            ) : (
              <p>
                No description yet.
                <br /> Write something about your organisation{" "}
                <span className={styles.link} onClick={this.openEditForm}>
                  here.
                </span>
              </p>
            )}
          </div>
          <img
            src="http://placekitten.com/200/200"
            className={styles.teamlogo}
            alt="Location"
          />
        </div>
      </>
    );
  }
}
export default inject(
  `committeeStore`,
  `userStore`
)(observer(CommitteeDescription));
