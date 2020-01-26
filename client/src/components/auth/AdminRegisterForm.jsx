import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./Auth.module.css";

import ImageUploader from "react-images-upload";

class AdminRegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ``,
      password2: ``,
      phone: ``,
      images: []
    };
  }

  componentDidMount = async () => {
    await this.getRequestId();
  };

  getRequestId = async () => {
    const query = new URLSearchParams(this.props.location.search);
    const id = query.get("id");
    this.setState({ requestId: id });
    await this.props.requestStore.getOne(id);
  };

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };

    state[input.name] = input.value;
    this.setState(state);
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { userStore, committeeStore, requestStore, history } = this.props;

    await this.uploadAvatar();

    const { password, avatarUrl } = this.state;
    const {
      id,
      email,
      name,
      surname,
      phone,
      organisation,
      job
    } = this.props.requestStore.currentRequest;
    const committeeId = id;

    await userStore
      .register(
        name,
        surname,
        email,
        password,
        job,
        phone,
        organisation,
        committeeId,
        avatarUrl
      )
      .then(() => {
        userStore.login(email, password);
      })
      .then(() => {
        committeeStore.addCommittee({
          id: committeeId,
          name: organisation,
          raceday: new Date("2020-09-29"),
          city: "",
          country: "",
          description: ""
        });
      })
      .then(() => {
        history.push(ROUTES.dashboard);
      })
      .then(() => {
        requestStore.deleteRequest(this.props.requestStore.currentRequest);
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
    const files = Array.from(e);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    this.setState({ formData: formData });
  };

  render() {
    const { password, password2, newPhone } = this.state;
    const {
      email,
      name,
      surname,
      phone
    } = this.props.requestStore.currentRequest;

    if (email && name && surname && phone && this.state.requestId) {
      return (
        <>
          <div className={styles.container}>
            <p>Admin register</p>
            <h1 className={styles.heading1}>Hi {name}!</h1>
            <p>Please pick your avatar and password to proceed.</p>
            <hr />
            <form onSubmit={this.handleSubmit} className={styles.form}>
              <ImageUploader
                withIcon={true}
                buttonText="Choose images"
                onChange={this.changeFile}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
                withPreview={true}
                singleImage={true}
              />

              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={this.handleChange}
                  className={styles.input}
                  placeholder="Password"
                />
              </label>
              <label htmlFor="password2">
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  ref={password2}
                  onChange={this.handleChange}
                  className={styles.input}
                  placeholder="Confirm password"
                />
              </label>

              {phone ? null : (
                <label htmlFor="newPhone">
                  <input
                    type="text"
                    name="newPhone"
                    id="newPhone"
                    value={newPhone}
                    onChange={this.handleChange}
                    className={styles.input}
                    placeholder="phone"
                  />
                </label>
              )}
              <input
                type="submit"
                value="Register"
                disabled={
                  (password && password !== password2) ||
                  !email ||
                  !name ||
                  !surname ||
                  !password
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
    } else {
      return (
        <div>
          <p>Seems like you haven't received an invitation.</p>
          <p>Or you allready used your invitationlink.</p>
        </div>
      );
    }
  }
}

export default inject(
  `userStore`,
  `requestStore`,
  `committeeStore`
)(withRouter(observer(AdminRegisterForm)));
