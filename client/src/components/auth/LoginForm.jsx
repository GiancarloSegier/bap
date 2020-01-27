import React, { Component } from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./Auth.module.css";
import modalStyles from "../../styles/modal.module.css";
import formStyles from "../../styles/form.module.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: false,
      error: false,
      disabled: true,
      checkUser: false
    };

    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.userStore
        .login(this.state.email, this.state.password)
        .then(() => {
          if (this.props.userStore.authUser) {
            this.props.history.push(ROUTES.dashboard);
          } else {
            this.setState({ error: true, checkUser: true });
          }
        });
    } else {
      this.setState({ error: true });
    }
  };
  checkInput = (e, inputType) => {
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
    if (inputType === "password") {
      this.setState({ password: value });
    }
  };

  render() {
    return (
      <>
        <section className={modalStyles.modal}>
          <div className={modalStyles.modalContainer}>
            <form onSubmit={this.handleSubmit} className={styles.form}>
              <h2 className={formStyles.form__title}>Login</h2>
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
              <fieldset className={formStyles.form__group}>
                <label htmlFor="email" className={formStyles.form__label}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  ref={this.passwordInput}
                  className={formStyles.form__input}
                  onChange={e => this.checkInput(e, "password")}
                />
              </fieldset>
              <div className={styles.loginbuttonbox}>
                <a href="#" className={styles.forgot}>
                  forgot login details?
                </a>

                <input
                  type="submit"
                  value="Login"
                  className={formStyles.form__button}
                  disabled={
                    !this.state.email || !this.passwordInput.current.value
                  }
                />
              </div>
              <p
                className={
                  this.state.error ? formStyles.error : formStyles.errorHidden
                }
              >
                Incorrect email or password
              </p>
            </form>
          </div>
          <section>
            <div
              className={
                modalStyles.modalContainer + " " + modalStyles.divideBorder
              }
            >
              <h3 className={styles.heading3}>No login details yet?</h3>
              <p className={styles.question}>
                Organisation fighting against breast cancer and interested in
                organising a race?{" "}
                <Link to={ROUTES.request} className={styles.link}>
                  Request acces first.
                </Link>
              </p>
              <p className={styles.question}>
                Committee member but no login yet? Ask your event manager for
                login details
              </p>
            </div>
          </section>
        </section>
      </>
    );
  }
}

export default inject(`userStore`)(withRouter(LoginForm));
