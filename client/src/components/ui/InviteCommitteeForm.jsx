import React, { Component } from "react";
import modalStyles from "../../styles/modal.module.css";
import formStyles from "../../styles/form.module.css";
import { inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import styles from "./modalForm.module.css";

class InviteCommitteeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      organisation: "",
      name: "",
      surname: "",
      emailError: false,
      error: false
    };
    this.emailInput = React.createRef();
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.organisationInput = React.createRef();
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ fadeIn: true });
    }, 100);
  };
  componentWillUnmount() {
    this.props.requestStore.getAll();
  }
  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };

    state[input.name] = input.value;
    this.setState(state);
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

  randomStr = (len, arr) => {
    let ans = "";
    for (let i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
  };

  handleSubmit = e => {
    // const uuid = require("uuid");
    // const requestId = uuid();
    const mongoose = require("mongoose");
    const randomId = this.randomStr(24, "12345abcde");
    const requestId = mongoose.Types.ObjectId(randomId);

    const { name, surname, email, organisation } = this.state;

    e.preventDefault();

    if (name !== "" && surname !== "" && organisation !== "" && email !== "") {
      fetch(
        `http://localhost:4000/send-mail?type=invite&id=${requestId}&name=${name}&recipient=${email}&organisation=${organisation}`
      ).catch(err => console.log(err));

      this.props.requestStore.addRequest({
        _id: requestId,
        name: name,
        surname: surname,
        organisation: organisation,
        phone: "",
        email: email,
        message: "",
        job: {
          assignment: "Event Manager",
          privileges: "admin"
        },
        pending: true,
        seen: true
      });

      this.setState({
        name: "",
        surname: "",
        email: "",
        organisation: ""
      });

      this.nameInput.current.value = "";
      this.emailInput.current.value = "";
      this.surnameInput.current.value = "";
      this.organisationInput.current.value = "";
    } else {
      this.setState({ error: true });
    }

    this.setState({ fadeIn: false });
    setTimeout(() => {
      this.props.onConfirm();
    }, 200);
  };

  closeForm = e => {
    this.setState({ fadeIn: false });
    setTimeout(() => {
      this.props.onConfirm();
    }, 200);
  };

  render() {
    const { fadeIn, email, organisation, name, surname } = this.state;
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
            <form onSubmit={this.handleSubmit}>
              <fieldset className={formStyles.form__group}>
                <label htmlFor="email" className={formStyles.form__label}>
                  Organisation name
                </label>
                <input
                  type="text"
                  name="organisation"
                  id="organisation"
                  placeholder="Organisation name"
                  ref={this.organisationInput}
                  className={formStyles.form__input}
                  onChange={this.handleChange}
                />
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
                  value="Login"
                  className={formStyles.form__button}
                  disabled={!email || !name || !surname || !organisation}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default inject(`requestStore`)(withRouter(InviteCommitteeForm));
