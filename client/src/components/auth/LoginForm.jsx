import React, { Component } from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./Auth.module.css";

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
    console.log(props);

    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.userStore.login(this.state.email, this.state.password).then(() => {
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
    this.checkFilledForm();
  };

  checkFilledForm() {
    console.log(this.state);
    if (
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.password.length > 1
    ) {
      this.setState({ disabled: false, error: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <h2>Login</h2>
            <input
              name="email"
              id="email="
              placeholder="email"
              ref={this.emailInput}
              className={styles.input}
              onChange={e => this.checkInput(e, "email")}
            />
            <p
              className={
                this.state.emailError ? styles.error : styles.errorHidden
              }
            >
              You have to fill in a valid email
            </p>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              ref={this.passwordInput}
              className={styles.input}
              onChange={e => this.checkInput(e, "password")}
            />

            <input type="submit" value="login" className={styles.button} />
            <p className={this.state.error ? styles.error : styles.errorHidden}>
              {this.state.checkUser
                ? "Incorrect email or password"
                : "Please fill in all fields correctly"}
            </p>

            <p className={styles.subLink}>
              No account?{` `}
              <Link to={ROUTES.request} className={styles.link}>
                Send a request!
              </Link>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default inject(`userStore`)(withRouter(LoginForm));
