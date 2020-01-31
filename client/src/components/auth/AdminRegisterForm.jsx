import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./Auth.module.css";
import modalStyles from "../../styles/modal.module.css";
import formStyles from "../../styles/form.module.css";

class AdminRegisterForm extends Component {
  checks = {};
  constructor(props) {
    super(props);
    this.state = {
      password: ``,
      password2: ``,
      phone: ``,
      images: []
    };
    this.avatarInput = React.createRef();
    this.passwordInput = React.createRef();
    this.password2Input = React.createRef();
    this.imgPreview = React.createRef();
  }

  componentDidMount = async () => {
    this.props.userStore.logout();
    await this.getRequestId();
  };

  getRequestId = async () => {
    const query = new URLSearchParams(this.props.location.search);
    const id = query.get("id");
    this.setState({ requestId: id });
    await this.props.requestStore.getOne(id);
  };

  handleSubmit = async e => {
    const mongoose = require("mongoose");
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

    const randomId = this.randomStr(24, "12345abcde");
    const committeeId = mongoose.Types.ObjectId(randomId);

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
    const preview = this.imgPreview;
    const files = this.avatarInput.current.files;
    const img = files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function() {
        preview.current.src = reader.result;
      },
      false
    );

    if (img) {
      reader.readAsDataURL(img);
    }

    const formData = new FormData();
    Array.from(files).forEach((file, i) => {
      formData.append(i, file);
    });

    this.setState({ formData: formData });
    this.checks["avatar"] = true;
    this.props.onUpdate(this.checks);
  };

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };

    state[input.name] = input.value;
    this.setState(state);
    this.updateChecks(input);
  };

  updateChecks = input => {
    this.checks[input.name] = input.value;
    this.props.onUpdate(this.checks);
  };

  render() {
    const { password, password2, newPhone, formData, avatar } = this.state;
    const {
      email,
      name,
      surname,
      job,
      organisation,
      phone
    } = this.props.requestStore.currentRequest;

    if (email && name && surname && this.state.requestId) {
      return (
        <>
          <section className={modalStyles.modal}>
            <form onSubmit={this.handleSubmit}>
              <div className={modalStyles.modalContainer}>
                <h2 className="hidden">Register</h2>
                <p className={formStyles.form__title + " " + styles.borderBox}>
                  {name} {surname}
                </p>
                <p className={styles.job + " " + styles.borderBox}>
                  {job.assignment} - {organisation}
                </p>
                <p className={styles.contact + " " + styles.borderBox}>
                  Something not right here?
                </p>
                <p className={styles.contact + " " + styles.borderBox}>
                  Contact jurgen.vanpraet@thinkpinkeurope.be
                </p>

                <div className={formStyles.previewBox}>
                  <label
                    htmlFor="avatar"
                    className={
                      formStyles.avatarButton +
                      " " +
                      (formData ? formStyles.picked : null)
                    }
                  >
                    {!formData ? (
                      <img src="../assets/icons/addAvatar.png" />
                    ) : null}
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="avatar"
                    accept="image/jpg, image/gif, image/png"
                    ref={this.avatarInput}
                    onChange={this.changeFile}
                    className={formStyles.avatarInput}
                  />

                  <img
                    src="#"
                    id="previewImg"
                    ref={this.imgPreview}
                    className={
                      formData ? formStyles.previewImg : formStyles.noImg
                    }
                  />
                </div>
              </div>
              <div
                className={
                  modalStyles.modalContainer + " " + modalStyles.divideBorder
                }
              >
                <fieldset className={formStyles.form__group}>
                  <label htmlFor="email" className={formStyles.form__label}>
                    Choose your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="New password"
                    ref={this.passwordInput}
                    className={formStyles.form__input}
                    onChange={this.handleChange}
                  />
                </fieldset>
                <fieldset className={formStyles.form__group}>
                  <label htmlFor="email" className={formStyles.form__label}>
                    Repeat your password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="Repeat password"
                    ref={this.password2Input}
                    className={formStyles.form__input}
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
                    value="Login"
                    className={formStyles.form__button}
                    disabled={
                      !this.checks.avatar ||
                      !this.checks.password ||
                      !this.checks.password2 ||
                      this.checks.password !== this.checks.password2
                    }
                  />
                </div>
              </div>
            </form>
          </section>
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