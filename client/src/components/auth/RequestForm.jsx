import React, { Component } from "react";
import { inject } from "mobx-react";

import { withRouter, Link } from "react-router-dom";

import styles from "./Auth.module.css";
import modalStyles from "../../styles/modal.module.css";
import formStyles from "../../styles/form.module.css";

import { ROUTES } from "../../constants/index";

class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.organisationInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();

    this.messageInput = React.createRef();

    this.state = {
      emailError: false,
      error: false,
      filledForm: false
    };
  }
  randomStr = (len, arr) => {
    let ans = "";
    for (let i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
  };

  handleSubmit = e => {
    this.setState({ filledForm: true });
    const mongoose = require("mongoose");
    const randomId = this.randomStr(24, "12345abcde");
    const requestId = mongoose.Types.ObjectId(randomId);

    const { name, surname, email, message, phone, organisation } = this.state;

    e.preventDefault();

    if (
      name !== "" &&
      surname !== "" &&
      organisation !== "" &&
      phone !== "" &&
      email !== "" &&
      message !== ""
    ) {
      fetch(
        `/send-mail?type=request&sender=${email}&message=${message}&name=${name}&surname=${surname}&phone=${phone}&organisation=${organisation}&id=${requestId}`
      ).catch(err => console.log(err));

      this.props.requestStore.addRequest({
        _id: requestId,
        name: name,
        surname: surname,
        organisation: organisation,
        phone: phone,
        email: email,
        message: message,
        job: {
          assignment: "Event manager",
          privileges: "admin"
        },
        pending: false,
        seen: false
      });

      this.setState({
        name: "",
        surname: "",
        email: "",
        organisation: "",
        phone: "",
        message: ""
      });

      this.nameInput.current.value = "";
      this.emailInput.current.value = "";
      this.surnameInput.current.value = "";
      this.messageInput.current.value = "";
      this.phoneInput.current.value = "";
      this.organisationInput.current.value = "";
    } else {
      this.setState({ error: true });
    }
  };

  checkEmail = (e, inputType) => {
    /*eslint no-useless-escape: "off"*/
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const value = e.target.value;
    this.setState({ checkUser: false });
    if (inputType === "email") {
      if (re.test(value)) {
        this.setState({
          email: value,
          emailError: false
        });
      } else {
        this.setState({
          email: "",
          emailError: true
        });
      }
    }
  };

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };

    state[input.name] = input.value;
    this.setState(state);
  };

  render() {
    const {
      name,
      surname,
      email,
      message,
      phone,
      organisation,
      filledForm
    } = this.state;

    return (
      <>
        <section className={modalStyles.modal + " " + styles.modalHeight}>
          <div className={modalStyles.modalContainer}>
            {!filledForm ? (
              <form onSubmit={this.handleSubmit} className={styles.form}>
                <h2 className="hidden">Request</h2>
                <div className={modalStyles.grid}>
                  <fieldset className={formStyles.form__group}>
                    <label htmlFor="name" className={formStyles.form__label}>
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
                    <label htmlFor="surname" className={formStyles.form__label}>
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
                    <label
                      htmlFor="organisation"
                      className={formStyles.form__label}
                    >
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      id="organisation"
                      placeholder="Organisation"
                      ref={this.organisationInput}
                      className={formStyles.form__input}
                      onChange={this.handleChange}
                    />
                  </fieldset>

                  <fieldset className={formStyles.form__group}>
                    <label htmlFor="phone" className={formStyles.form__label}>
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      ref={this.phoneInput}
                      className={formStyles.form__input}
                      onChange={this.handleChange}
                    />
                  </fieldset>
                </div>

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
                    onChange={e => this.checkEmail(e, "email")}
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

                <fieldset className={formStyles.form__group}>
                  <label htmlFor="message" className={formStyles.form__label}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="10"
                    ref={this.messageInput}
                    className={
                      formStyles.form__input + " " + formStyles.form__textarea
                    }
                    onChange={this.handleChange}
                  />
                </fieldset>
                <div className={styles.loginbuttonbox}>
                  <p
                    className={
                      this.state.error
                        ? formStyles.error
                        : formStyles.errorHidden
                    }
                  >
                    Please fill in all fields
                  </p>
                  <input
                    type="submit"
                    value="Send"
                    className={formStyles.form__button}
                    disabled={
                      !name ||
                      !surname ||
                      !email ||
                      !phone ||
                      !message ||
                      !organisation
                    }
                  />
                </div>
              </form>
            ) : (
              <div className={styles.requestConfirm}>
                <img
                  src="/assets/request_send.png"
                  alt=""
                  className={styles.image}
                />
                <h2 className={styles.confirmTitle}>Request send</h2>
                <p className={styles.confirmText}>
                  When you’ve been accepted, you will receive an email with an
                  invitation link.
                </p>
                <Link to={ROUTES.home} className={formStyles.form__button}>
                  Back to home
                </Link>
              </div>
            )}
          </div>
        </section>
      </>
    );
  }
}

export default inject(`userStore`, `requestStore`)(withRouter(RequestForm));
