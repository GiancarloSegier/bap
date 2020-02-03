import React, { Component } from "react";
import modalStyles from "../../styles/modal.module.css";
import formStyles from "../../styles/form.module.css";
// import styles from "./InviteCommitteeForm.module.css";

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

  handleSubmit = e => {
    e.preventDefault();
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
            <h3>Invite Event Manager</h3>
            <p>
              The committee manager will receive an invitation to setup their
              committee.
            </p>
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

export default InviteCommitteeForm;
