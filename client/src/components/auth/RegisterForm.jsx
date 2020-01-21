import React, { Component } from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./Auth.module.css";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = { email: ``, pwd: ``, pwd2: ``, name: `` };
  }

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };
    state[input.name] = input.value;
    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userStore, history } = this.props;
    const { email, pwd, name } = this.state;
    userStore.register(name, email, pwd).then(() => {
      history.push(ROUTES.login);
    });
  };

  render() {
    const { email, pwd, pwd2, name } = this.state;
    return (
      <>
        <div className={styles.container}>
          <div className={styles.authBox}>
            <div className={styles.logoBox}>
              <h1 className={styles.logo__img}>
                <span className="hidden">Mr. Todo</span>
              </h1>
            </div>
            <form onSubmit={this.handleSubmit} className={styles.form}>
              <h2 className={styles.heading2}>Register</h2>
              <label htmlFor="email">
                <input
                  type="test"
                  name="name"
                  id="name="
                  value={name}
                  onChange={this.handleChange}
                  className={styles.input}
                  placeholder="Username"
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email="
                  value={email}
                  onChange={this.handleChange}
                  className={styles.input}
                  placeholder="Email"
                />
              </label>
              <label htmlFor="username">
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  value={pwd}
                  onChange={this.handleChange}
                  className={styles.input}
                  placeholder="Password"
                />
              </label>
              <label htmlFor="username">
                <input
                  type="password"
                  name="pwd2"
                  id="pwd2"
                  ref={pwd2}
                  onChange={this.handleChange}
                  className={styles.input}
                  placeholder="Confirm password"
                />
              </label>
              <input
                type="submit"
                value="Register"
                disabled={(pwd && pwd !== pwd2) || !email || !name || !pwd}
                className={styles.button}
              />
              <p className={styles.subLink}>
                Have an account?{` `}
                <Link to={ROUTES.login} className={styles.link}>
                  Login!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default inject(`userStore`)(withRouter(RegisterForm));
