import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./Auth.module.css";

import ImageUploader from "react-images-upload";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ``,
      pwd: ``,
      pwd2: ``,
      name: ``,
      surname: ``,
      job: {
        assignment: "Race coordinator",
        privileges: "supervisor"
      },
      images: []
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

  handleSubmit = async e => {
    e.preventDefault();
    const { userStore, history } = this.props;

    await this.uploadAvatar();
    const { email, pwd, name, surname, job, avatarUrl } = this.state;
    await userStore
      .register(name, surname, email, pwd, job, avatarUrl)
      .then(() => {
        userStore.login(email, pwd);
      })
      .then(() => {
        history.push(ROUTES.dashboard);
      });
  };

  uploadAvatar = async () => {
    await fetch(`http://localhost:4000/image-upload`, {
      method: "POST",
      body: this.state.formData
    })
      .then(res => res.json())
      .then(images => {
        this.setState({
          avatarUrl: images[0].url
        });
      });
  };

  changeFile = e => {
    console.log(e);
    const files = Array.from(e);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    this.setState({ formData: formData });
  };

  render() {
    const { email, pwd, pwd2, name, surname } = this.state;
    return (
      <>
        <div className={styles.container}>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <h2>Register</h2>
            <ImageUploader
              withIcon={true}
              buttonText="Choose images"
              onChange={this.changeFile}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
              withPreview={true}
              singleImage={true}
            />
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
