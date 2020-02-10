import React, { Component } from "react";
import { inject } from "mobx-react";

import { withRouter } from "react-router-dom";
import modalStyles from "../../styles/modal.module.css";
import formStyles from "../../styles/form.module.css";
import styles from "./modalForm.module.css";
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

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ fadeIn: true });
    }, 100);
  };

  randomStr = (len, arr) => {
    let ans = "";
    for (let i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
  };

  checkInput = (e, inputType) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const value = e.target.value;
    if (inputType === "email") {
      if (re.test(value)) {
        this.setState({ email: value, emailError: false });
      } else {
        this.setState({ email: "", emailError: true });
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const mongoose = require("mongoose");

    const randomId = this.randomStr(24, "12345abcde");
    const inviteId = mongoose.Types.ObjectId(randomId);

    const { name, surname, email, jobAssignment } = this.state;
    const { committeeId, organisation } = this.props.userStore.authUser;

    if (name !== "" && surname !== "" && email !== "") {
      fetch(
        `/send-mail?type=committeeinvite&sender=${email}&sendername=${this.props.userStore.authUser.name}&name=${name}&surname=${surname}&committee=${organisation}&id=${inviteId}`
      ).catch(err => console.log(err));

      this.props.inviteStore.addInvite({
        id: inviteId,
        name: name,
        surname: surname,
        email: email,
        committeeId: committeeId,
        organisation: organisation,
        job: {
          assignment: jobAssignment,
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

    this.closeForm();
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
    if (this.state.email !== "") {
      this.setState({ error: false });
    }
  }

  handleChangeJob = e => {
    this.setState({ jobAssignment: e.target.value });
  };

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };

    state[input.name] = input.value;
    this.setState(state);
  };
  closeForm = e => {
    this.setState({ fadeIn: false });
    setTimeout(() => {
      this.props.onConfirm();
    }, 200);
  };
  render() {
    const { name, surname, email, fadeIn, jobAssignment } = this.state;
    return (
      <div
        className={
          modalStyles.modalBackground +
          " " +
          (fadeIn ? modalStyles.fadeIn : null)
        }
      >
        <div
          className={
            modalStyles.floatingModal +
            " " +
            (fadeIn ? modalStyles.fadeIn : null)
          }
        >
          <div className={modalStyles.modalContainer}>
            <div className={styles.oneLine}>
              <div className={styles.headerBlock}>
                <h3 className={modalStyles.heading3}>Invite event manager</h3>
                <p>
                  The committee manager will receive an invitation to setup
                  their committee.
                </p>
              </div>
              <button
                type="button"
                className={modalStyles.close__button}
                onClick={this.closeForm}
              >
                <span className={modalStyles.decliner}></span>
              </button>
            </div>
          </div>
          <div
            className={
              modalStyles.modalContainer + " " + modalStyles.divideBorder
            }
          >
            <form onSubmit={this.handleSubmit} className={styles.form}>
              <fieldset className={formStyles.form__group}>
                <label htmlFor="job" className={formStyles.form__label}>
                  Job function
                </label>
                <select
                  name="job"
                  id="job"
                  onChange={this.handleChangeJob}
                  className={formStyles.form__input}
                >
                  <option selected="true" defaultValue disabled="disabled">
                    Job function
                  </option>
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
              </fieldset>

              <fieldset className={formStyles.form__group}>
                <label htmlFor="email" className={formStyles.form__label}>
                  First name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First name"
                  ref={this.nameInput}
                  className={formStyles.form__input}
                  onChange={this.handleChange}
                />
              </fieldset>
              <fieldset className={formStyles.form__group}>
                <label htmlFor="email" className={formStyles.form__label}>
                  Last name
                </label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="Last name"
                  ref={this.surnameInput}
                  className={formStyles.form__input}
                  onChange={this.handleChange}
                />
              </fieldset>
              <fieldset className={formStyles.form__group}>
                <label htmlFor="email" className={formStyles.form__label}>
                  Email
                </label>
                <input
                  name="email"
                  id="email="
                  placeholder="Email"
                  ref={this.emailInput}
                  className={
                    formStyles.form__input +
                    " " +
                    (this.state.emailError ? formStyles.errorInput : null)
                  }
                  onChange={e => this.checkInput(e, "email")}
                />
                <p
                  className={
                    this.state.emailError
                      ? formStyles.error
                      : formStyles.errorHidden
                  }
                >
                  No valid email
                </p>
              </fieldset>

              <div className={modalStyles.buttonBox}>
                <input
                  type="submit"
                  value="Invite member"
                  className={formStyles.form__button}
                  disabled={!email || !name || !surname || !jobAssignment}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default inject(
  `userStore`,
  `jobStore`,
  `requestStore`,
  `inviteStore`
)(withRouter(InviteForm));
