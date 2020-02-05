import React, { Component } from "react";
import styles from "./CommitteeDescription.module.css";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import uiStyles from "../../../../styles/ui.module.css";
import { ROUTES } from "../../../../constants/index";
import Warning from "../../../ui/Warning";
import { inject, observer } from "mobx-react";

class CommitteeDescription extends Component {
  constructor(props) {
    super(props);
    this.state = { warning: false };
  }

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

  render() {
    const { committee, committeeMembers, privileges } = this.props;
    const { warning } = this.state;

    return (
      <>
        {warning ? (
          <Warning
            onContinue={this.onDeleteCommittee}
            onCancel={this.onCancel}
            message="Are you sure you want to delete this committee?"
          />
        ) : null}
        <div className={styles.flex}>
          {privileges === "supervisor" ? (
            <Link to={ROUTES.committees} className={styles.back}>
              <FontAwesome name="chevron-left" className={styles.arrow} />
              back to overview
            </Link>
          ) : (
            <p>My Committee</p>
          )}
          {privileges === "supervisor" ? (
            <button
              type="button"
              className={styles.textButton}
              onClick={this.showWarning}
            >
              <FontAwesome name="trash" className={styles.trash} />
              Remove committee
            </button>
          ) : (
            <button
              type="button"
              className={uiStyles.textButton + " " + uiStyles.pink}
              onClick={this.openInviteForm}
            >
              <span className={uiStyles.button__icon}>+</span>Invite member
            </button>
          )}
        </div>
        <h1 className={styles.title}>{committee.name}</h1>
        <div className={styles.flex}>
          <div>
            <div className={styles.info}>
              <div className={styles.stat + " " + styles.city}>
                <img
                  src="http://placekitten.com/40/40"
                  className={styles.icon}
                  width="40"
                  height="40"
                  alt="Location"
                />
                <div className={styles.stat_info}>
                  <p className={styles.subtitle}>{committee.country}</p>
                  <p className={styles.data}>{committee.city}</p>
                </div>
              </div>
              <div className={styles.stat + " " + styles.raceday}>
                <img
                  src="http://placekitten.com/40/40"
                  className={styles.icon}
                  width="40"
                  height="40"
                  alt="Location"
                />
                <div className={styles.stat_info}>
                  <p className={styles.subtitle}>Raceday</p>
                  <p className={styles.data}>29/07/20</p>
                </div>
              </div>
              <div className={styles.stat + " " + styles.members}>
                <img
                  src="http://placekitten.com/40/40"
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
              <p className={styles.description}>committee.description</p>
            ) : privileges === "supervisor" ? (
              <p>No description yet</p>
            ) : (
              <p>
                No descreption yet.
                <br /> Write something about your organisation{" "}
                <a className={styles.link} onClick={this.openInviteForm}>
                  here.
                </a>
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
