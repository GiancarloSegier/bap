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

    this.logoInput = React.createRef();
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
      description: currentCommittee.description,
      logo: currentCommittee.logo
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

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.formData) {
      await this.uploadLogo();
    }
    const { currentCommittee } = this.props.committeeStore;
    const { name, raceday, city, country, description, logoUrl } = this.state;
    await currentCommittee.setName(name);
    await currentCommittee.setRaceday(raceday);
    await currentCommittee.setCity(city);
    await currentCommittee.setCountry(country);
    await currentCommittee.setDescription(description);
    if (logoUrl) {
      await currentCommittee.setLogo(logoUrl);
    }
    await this.props.committeeStore.updateCommittee(currentCommittee);
    this.closeForm();
  };

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };

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
  };

  changeFile = e => {
    if (e.currentTarget.files.length !== 0) {
      this.setState({ logo: URL.createObjectURL(e.currentTarget.files[0]) });

      const files = e.currentTarget.files;

      const formData = new FormData();
      Array.from(files).forEach((file, i) => {
        formData.append(i, file);
      });

      this.setState({ formData: formData });
    }
  };

  uploadLogo = async () => {
    await fetch(`/image-upload`, {
      method: "POST",
      body: this.state.formData
    })
      .then(res => res.json())
      .then(images => {
        this.setState({
          logoUrl: images[0].url
        });
      });
  };

  closeForm = e => {
    this.setState({ fadeIn: false });
    setTimeout(() => {
      this.props.onConfirm();
    }, 200);
  };

  render() {
    const {
      name,
      city,
      country,
      fadeIn,
      description,
      dateString,
      logo
    } = this.state;

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
                    ref={this.logoInput}
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
                  rows="6"
                  ref={this.messageInput}
                  className={
                    formStyles.form__input + " " + formStyles.form__textarea
                  }
                  onChange={this.handleChange}
                  defaultValue={description}
                />
              </fieldset>

              <fieldset className={styles.marginBottom}>
                <div className={styles.oneLineForm}>
                  <p htmlFor="logo" className={formStyles.form__label}>
                    Organisation logo
                  </p>
                  <label htmlFor="logo" className={styles.imageUpload}>
                    {logo ? (
                      <img
                        src={logo}
                        alt="logo preview"
                        className={styles.logoPreview}
                      />
                    ) : (
                      <>
                        <div className={styles.uploadCard}>
                          <div className={styles.icon}>
                            <span className={styles.cross_line}></span>
                            <span className={styles.cross_line}></span>
                          </div>
                        </div>
                        <p className={styles.imageUploadText}>
                          PNG
                          <br />
                          or <br />
                          JPG
                        </p>
                      </>
                    )}
                  </label>
                  <input
                    type="file"
                    name="logo"
                    id="logo"
                    multiple={false}
                    className={formStyles.fileInput}
                    onChange={this.changeFile}
                    accept="image/x-png,image/jpg"
                  />
                </div>
              </fieldset>

              <div className={modalStyles.buttonBox}>
                <button
                  type="submit"
                  className={uiStyles.textButton}
                  disabled={!name}
                >
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
