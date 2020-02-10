import React, { Component } from "react";

import styles from "./designstudio.module.css";
import formStyles from "../../styles/form.module.css";
import modalStyles from "../../styles/modal.module.css";

class PosterForm extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    console.log(e.target.value);

    this.props.onChangeData(e);
  };

  render() {
    return (
      <div className={styles.scrollContainer}>
        <div className={styles.navContainer}>
          <fieldset className={formStyles.form__group}>
            <label
              htmlFor="title"
              className={formStyles.form__label + " " + formStyles.labelBig}
            >
              Race date
            </label>
            <input
              type="date"
              name="raceday"
              id="raceday"
              className={formStyles.form__input}
              onChange={this.handleChange}
              defaultValue="2020-09-29"
            />
          </fieldset>
          <fieldset className={formStyles.form__group}>
            <label
              htmlFor="city"
              className={formStyles.form__label + " " + formStyles.labelBig}
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              className={formStyles.form__input}
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset className={formStyles.form__group}>
            <label
              htmlFor="hours"
              className={formStyles.form__label + " " + formStyles.labelBig}
            >
              Hours
            </label>
            <input
              type="text"
              name="hours"
              id="hours"
              placeholder="9:00 - 14:00"
              className={formStyles.form__input}
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset className={formStyles.form__group}>
            <label
              htmlFor="site"
              className={formStyles.form__label + " " + formStyles.labelBig}
            >
              Website
            </label>
            <input
              type="text"
              name="site"
              id="site"
              placeholder="raceforthecure.be"
              className={formStyles.form__input}
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset className={styles.marginBottom}>
            <div className={styles.oneLineForm}>
              <label
                htmlFor="walking"
                className={formStyles.form__label + " " + formStyles.labelBig}
              >
                Walking km
              </label>
              <input
                type="number"
                name="walking"
                id="walking"
                placeholder="3 km"
                min="1"
                className={formStyles.form__input + " " + formStyles.smallInput}
                onChange={this.handleChange}
              />
            </div>
          </fieldset>
          <fieldset className={styles.marginBottom}>
            <div className={styles.oneLineForm}>
              <label
                htmlFor="running"
                className={formStyles.form__label + " " + formStyles.labelBig}
              >
                Running km
              </label>
              <input
                type="number"
                name="running"
                id="running"
                placeholder="6 km"
                min="1"
                className={formStyles.form__input + " " + formStyles.smallInput}
                onChange={this.handleChange}
              />
            </div>
          </fieldset>
          <fieldset className={formStyles.form__group}>
            <label
              htmlFor="logo"
              className={formStyles.form__label + " " + formStyles.labelBig}
            >
              Organisation logo
            </label>
            <input
              type="file"
              name="logo"
              id="logo"
              multiple={false}
              className={formStyles.form__input}
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset className={formStyles.form__group}>
            <label
              htmlFor="background"
              className={formStyles.form__label + " " + formStyles.labelBig}
            >
              Background image
            </label>
            <input
              type="file"
              name="background"
              id="background"
              multiple={false}
              className={formStyles.form__input}
              onChange={this.handleChange}
            />
          </fieldset>
        </div>
      </div>
    );
  }
}

export default PosterForm;
