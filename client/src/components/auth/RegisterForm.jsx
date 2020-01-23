import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./Auth.module.css";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ``,
      pwd: ``,
      pwd2: ``,
      name: ``,
      surname: ``,
      job: {}
    };
    console.log(props);
  }

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };
    if (input.name === "job") {
      const splitValue = input.value.split("|");
      const job = {
        assignment: splitValue[0],
        privileges: splitValue[1]
      };

      state[input.name] = job;
      this.setState(state);
    } else {
      state[input.name] = input.value;
      this.setState(state);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userStore, history } = this.props;
    const { email, pwd, name, surname, job } = this.state;
    userStore
      .register(name, surname, email, pwd, job)
      .then(() => {
        userStore.login(email, pwd);
      })
      .then(() => {
        history.push(ROUTES.dashboard);
      });
  };

  render() {
    const { email, pwd, pwd2, name, surname } = this.state;
    return (
      <>
        <div className={styles.container}>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <h2>Register</h2>
            <label htmlFor="name">
              <input
                type="test"
                name="name"
                id="name="
                value={name}
                onChange={this.handleChange}
                className={styles.input}
                placeholder="name"
              />
            </label>
            <label htmlFor="surname">
              <input
                type="test"
                name="surname"
                id="surname="
                value={surname}
                onChange={this.handleChange}
                className={styles.input}
                placeholder="surname"
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

            <select name="job" onChange={this.handleChange}>
              {this.props.jobStore.jobs.map(job => (
                <option value={`${job.assignment}|${job.privileges}`}>
                  {job.assignment}
                </option>
              ))}
            </select>

            <input
              type="submit"
              value="Register"
              disabled={
                (pwd && pwd !== pwd2) || !email || !name || !surname || !pwd
              }
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
      </>
    );
  }
}

export default inject(
  `userStore`,
  `jobStore`
)(withRouter(observer(RegisterForm)));
