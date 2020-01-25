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
      error: false,
      job: {
        assignment: "Event Manager",
        privileges: "member"
      }
    };
  }

  handleSubmit = e => {
    const uuid = require("uuid");
    const inviteId = uuid();

    const name = this.nameInput.current.value;
    const surname = this.surnameInput.current.value;
    const sender = this.emailInput.current.value;

    e.preventDefault();

    if (name !== "" && surname !== "" && sender !== "") {
      fetch(
        `http://127.0.0.1:4000/send-mail?type=committeeinvite&sender=${sender}&sendername=${this.props.userStore.authUser.name}&name=${name}&surname=${surname}&committee=${this.props.userStore.authUser.organisation}&id=${inviteId}`
      ).catch(err => console.log(err));

      // this.props.requestStore.addRequest({
      //   id: inviteId,
      //   name: name,
      //   surname: surname,
      //   email: sender,
      //   job: {
      //     assignment: "Event Manager",
      //     privileges: "admin"
      //   },
      //   pending: false
      // });

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

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ jobAssignment: e.target.value });
  };
  render() {
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
              className={styles.input}
            />
            <input
              type="text"
              name="surname"
              id="surname="
              placeholder="surname"
              ref={this.surnameInput}
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              id="email="
              placeholder="email"
              ref={this.emailInput}
              className={styles.input}
              // onChange={e => this.checkEmail(e, "email")}
            />
            <p
              className={
                this.state.emailError ? styles.error : styles.errorHidden
              }
            >
              You have to fill in a valid email
            </p>
            <select name="job" onChange={this.handleChange}>
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
              // disabled={
              //   !this.emailInput.current.value ||
              //   !this.nameInput.current.value ||
              //   !this.surnameInput.current.value
              // }
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
  `requestStore`
)(withRouter(InviteForm));
