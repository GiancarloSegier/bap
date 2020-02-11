import React, { Component } from "react";
import { inject } from "mobx-react";
import modalStyles from "../../styles/modal.module.css";
import uiStyles from "../../styles/ui.module.css";

import { withRouter } from "react-router-dom";
import formStyles from "../../styles/form.module.css";

import styles from "./modalForm.module.css";
class EditCommitteeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailError: false,
      error: false
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ fadeIn: true });
    }, 100);
    this.setBasics();
    this.getDate();
  };

  setBasics = () => {
    const { currentCommittee } = this.props.committeeStore;

    this.setState({
      name: currentCommittee.name,
      raceday: currentCommittee.raceday,
      city: currentCommittee.city,
      country: currentCommittee.country,
      description: currentCommittee.description
    });
  };

  getDate() {
    const raceDate = new Date(
      this.props.committeeStore.currentCommittee.raceday
    );
    const day = raceDate.getDate();
    const month = raceDate.getMonth() + 1;
    const year = raceDate.getFullYear();

    const dateString = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;

    this.setState({ dateString: dateString });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { currentCommittee } = this.props.committeeStore;
    const { name, raceday, city, country, description } = this.state;

    console.log(currentCommittee);
    currentCommittee.setName(name);
    currentCommittee.setRaceday(raceday);
    currentCommittee.setCity(city);
    currentCommittee.setCountry(country);
    currentCommittee.setDescription(description);

    this.props.committeeStore.updateCommittee(currentCommittee);

    this.closeForm();
  };

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };
    console.log(this.props.committeeStore.currentCommittee);

    if (input.name === "raceday") {
      const dateParts = input.value.split("-");
      const dateString = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
      const raceDate = new Date(dateString);
      state[input.name] = raceDate;
    } else if (input.value === "") {
      state[input.name] = "";
    } else {
      state[input.name] = input.value;
    }
    this.setState(state);
    console.log(state);
  };
  closeForm = e => {
    this.setState({ fadeIn: false });
    setTimeout(() => {
      this.props.onConfirm();
    }, 200);
  };
  render() {
    const { name, city, country, fadeIn, description, dateString } = this.state;

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
            modalStyles.bigModal +
            " " +
            (fadeIn ? modalStyles.fadeIn : null)
          }
        >
          <div className={modalStyles.modalContainer}>
            <div className={styles.oneLine}>
              <div className={styles.headerBlock}>
                <h3 className={modalStyles.heading3}>Committee information</h3>
                <p>
                  Who is your team and when is your race for the cure?
                  <br /> We suggest 27-09-2020 like most of the races.
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
            <form onSubmit={this.handleSubmit} className={styles.form}>
              <div className={modalStyles.grid}>
                <fieldset className={formStyles.form__group}>
                  <label htmlFor="name" className={formStyles.form__label}>
                    Organisation name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Organisation name"
                    className={formStyles.form__input}
                    onChange={this.handleChange}
                    defaultValue={name}
                  />
                </fieldset>
                <fieldset className={formStyles.form__group}>
                  <label htmlFor="raceday" className={formStyles.form__label}>
                    Raceday
                  </label>
                  <input
                    type="date"
                    name="raceday"
                    id="raceday"
                    className={formStyles.form__input}
                    onChange={this.handleChange}
                    defaultValue={dateString}
                  />
                </fieldset>
                <fieldset className={formStyles.form__group}>
                  <label htmlFor="city" className={formStyles.form__label}>
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    className={formStyles.form__input}
                    onChange={this.handleChange}
                    defaultValue={city}
                  />
                </fieldset>

                <fieldset className={formStyles.form__group}>
                  <label htmlFor="country" className={formStyles.form__label}>
                    Country
                  </label>
                  <input
                    type="tel"
                    name="country"
                    id="country"
                    placeholder="Country"
                    className={formStyles.form__input}
                    onChange={this.handleChange}
                    defaultValue={country}
                  />
                </fieldset>
              </div>
              <fieldset className={formStyles.form__group}>
                <label htmlFor="description" className={formStyles.form__label}>
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="This is who we are!"
                  rows="10"
                  ref={this.messageInput}
                  className={
                    formStyles.form__input + " " + formStyles.form__textarea
                  }
                  onChange={this.handleChange}
                  defaultValue={description}
                />
              </fieldset>
              <div className={modalStyles.buttonBox}>
                <button type="submit" className={uiStyles.textButton}>
                  <span
                    className={formStyles.checker + " " + formStyles.margin}
                  ></span>
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default inject(`committeeStore`)(withRouter(EditCommitteeForm));
