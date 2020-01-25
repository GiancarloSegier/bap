import React, { Component } from "react";
import { inject } from "mobx-react";

import { withRouter } from "react-router-dom";

import styles from "./Auth.module.css";

class InviteForm extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.emailInput = React.createRef();

    this.state = {
      emailError: false,
      error: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const uuid = require("uuid");
    const inviteId = uuid();
    let assignment = "";
    let memberJobs = [];

    const { name, surname, email, jobAssignment } = this.state;
    const { committeeId, organisation } = this.props.userStore.authUser;
    const { jobs } = this.props.jobStore;

    if (!jobAssignment) {
      for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];

        if (job.privileges === "member") {
          memberJobs.push(job);
        }
      }
      assignment = memberJobs[0].assignment;
    } else {
      assignment = jobAssignment;
    }

    if (name !== "" && surname !== "" && email !== "") {
      fetch(
        `http://127.0.0.1:4000/send-mail?type=committeeinvite&sender=${email}&sendername=${this.props.userStore.authUser.name}&name=${name}&surname=${surname}&committee=${organisation}&id=${inviteId}`
      ).catch(err => console.log(err));

      this.props.inviteStore.addInvite({
        id: inviteId,
        name: name,
        surname: surname,
        email: email,
        committeeId: committeeId,
        job: {
          assignment: assignment,
          privileges: "member"
        }
      });

      this.setState({ name: "", surname: "", email: "" });
      this.nameInput.current.value = "";
      this.emailInput.current.value = "";
      this.surnameInput.current.value = "";
    } else {
      this.setState({ error: true });
    }
  };

  checkEmail = (e, inputType) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const value = e.target.value;
    this.setState({ checkUser: false });
    if (inputType === "email") {
      if (re.test(value)) {
        this.setState({ email: value, emailError: false });
      } else {
        this.setState({ email: "", emailError: true });
      }
    }

    this.checkFilledForm();
  };

  checkFilledForm() {
    console.log(this.state);
    if (this.state.email !== "") {
      this.setState({ error: false });
    }
  }

  handleChangeJob = e => {
    console.log(e.target.value);
    this.setState({ jobAssignment: e.target.value });
  };

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };

    state[input.name] = input.value;
    this.setState(state);
  };
  render() {
    const { name, surname, email } = this.state;
    return (
      <>
        <div className={styles.container}>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              ref={this.nameInput}
              onChange={this.handleChange}
              className={styles.input}
            />
            <input
              type="text"
              name="surname"
              id="surname="
              placeholder="surname"
              ref={this.surnameInput}
              onChange={this.handleChange}
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              id="email="
              placeholder="email"
              ref={this.emailInput}
              className={styles.input}
              onChange={e => this.checkEmail(e, "email")}
            />
            <p
              className={
                this.state.emailError ? styles.error : styles.errorHidden
              }
            >
              You have to fill in a valid email
            </p>
            <select name="job" onChange={this.handleChangeJob}>
              {this.props.jobStore.jobs.map(job => {
                if (job.privileges === "member") {
                  return (
                    <option value={`${job.assignment}`}>
                      {job.assignment}
                    </option>
                  );
                }
              })}
            </select>

            <input
              type="submit"
              value="send invite"
              className={styles.button}
              disabled={!email || !name || !surname}
            />
            <p className={this.state.error ? styles.error : styles.errorHidden}>
              Please fill in all fields correctly
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default inject(
  `userStore`,
  `jobStore`,
  `requestStore`,
  `inviteStore`
)(withRouter(InviteForm));
