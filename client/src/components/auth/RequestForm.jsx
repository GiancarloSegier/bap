import React, { Component } from "react";
import { inject } from "mobx-react";

import { withRouter } from "react-router-dom";

import styles from "./Auth.module.css";

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
      error: false
    };
  }

  handleSubmit = e => {
    const uuid = require("uuid");
    const requestId = uuid();
    const name = this.nameInput.current.value;
    const surname = this.surnameInput.current.value;
    const organisation = this.organisationInput.current.value;
    const phone = this.phoneInput.current.value;
    const sender = this.state.email;

    const message = this.messageInput.current.value;

    e.preventDefault();

    if (
      name !== "" &&
      surname !== "" &&
      organisation !== "" &&
      phone !== "" &&
      this.state.email !== "" &&
      message !== ""
    ) {
      fetch(
        `http://127.0.0.1:4000/send-mail?type=request&sender=${sender}&message=${message}&name=${name}&surname=${surname}&phone=${phone}&organisation=${organisation}&id=${requestId}`
      ).catch(err => console.log(err));

      this.props.requestStore.addRequest({
        id: requestId,
        name: name,
        surname: surname,
        organisation: organisation,
        phone: phone,
        email: sender,
        message: message,
        pending: false
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
  render() {
    return (
      <>
        <div className={styles.container}>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <h2>Request acces</h2>
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
              type="text"
              name="organisation"
              id="organisation"
              placeholder="organisation"
              ref={this.organisationInput}
              className={styles.input}
            />
            <input
              type="tel"
              name="phone"
              id="phone="
              placeholder="phone"
              ref={this.phoneInput}
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

            <textarea
              name="message"
              id="message"
              placeholder="message"
              ref={this.messageInput}
              className={styles.input}
            />

            <input
              type="submit"
              value="send request"
              className={styles.button}
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

export default inject(`userStore`, `requestStore`)(withRouter(RequestForm));
