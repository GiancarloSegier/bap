import React, { Component } from "react";
import styles from "./designstudio.module.css";
import formStyles from "../../styles/form.module.css";
import modalStyles from "../../styles/modal.module.css";

class PosterFormat extends Component {
  handleChange = e => {
    this.props.onChangeData(e);
  };
  render() {
    return (
      <>
        <div className={styles.navContainer}>
          <fieldset className={styles.marginBottom}>
            <div className={styles.oneLineForm}>
              <label
                htmlFor="product"
                className={formStyles.form__label + " " + formStyles.labelBig}
              >
                Product
              </label>

              <select
                name="product"
                id="product"
                onChange={this.handleChange}
                defaultValue="poster"
                className={formStyles.form__input + " " + formStyles.smallInput}
              >
                <option value="poster">Poster</option>
                <option value="tshirt">T-shirt</option>
              </select>
            </div>
          </fieldset>
          <fieldset className={styles.marginBottom}>
            <div className={styles.oneLineForm}>
              <label
                htmlFor="format"
                className={formStyles.form__label + " " + formStyles.labelBig}
              >
                Format
              </label>

              <select
                name="format"
                id="format"
                onChange={this.handleChange}
                defaultValue="A3"
                className={formStyles.form__input + " " + formStyles.smallInput}
              >
                <option value="A3">A3</option>
                <option value="A4">A4</option>
                <option value="A5">A5</option>
              </select>
            </div>
          </fieldset>
          <fieldset className={styles.marginBottom}>
            <div className={styles.centerForm}>
              <label
                htmlFor="orientation"
                className={formStyles.form__label + " " + formStyles.labelBig}
              >
                Orientation
              </label>
              <div className={styles.orientation}>
                <input
                  type="radio"
                  name="orientation"
                  value="portrait"
                  id="portrait"
                  className={styles.template}
                  onChange={this.handleChange}
                  defaultChecked
                />
                <label htmlFor="portrait" className={styles.portrait}></label>
                <input
                  type="radio"
                  name="orientation"
                  value="landscape"
                  id="landscape"
                  className={styles.template}
                  onChange={this.handleChange}
                />
                <label htmlFor="landscape" className={styles.landscape}></label>
              </div>
            </div>
          </fieldset>
          <fieldset className={styles.marginBottom}>
            <div className={styles.centerForm}>
              <label
                htmlFor="orientation"
                className={formStyles.form__label + " " + formStyles.labelBig}
              >
                Sponsorborder
              </label>

              <label className={formStyles.switch}>
                <input
                  type="checkbox"
                  id="sponsorborder"
                  name="sponsorborder"
                  onChange={this.handleChange}
                />
                <span
                  className={formStyles.slider + " " + formStyles.round}
                ></span>
              </label>
            </div>
          </fieldset>
        </div>
        <div className={styles.navContainer + " " + modalStyles.divideBorder}>
          <fieldset className={styles.marginBottom}>
            <label
              htmlFor="poster"
              className={formStyles.form__label + " " + formStyles.labelBig}
            >
              Templates
            </label>
            <div className={styles.oneLineForm + " " + styles.templatesBlock}>
              <input
                type="radio"
                name="poster"
                value="posterA"
                id="templateA"
                className={styles.template}
                onChange={this.handleChange}
                defaultChecked
              />
              <label htmlFor="templateA" className={styles.templateLabel}>
                <img
                  src="/assets/designstudio/templateA.jpg"
                  className={styles.templateImg}
                  alt="template A screenshot"
                />
              </label>
              <input
                type="radio"
                name="poster"
                value="posterB"
                id="templateB"
                className={styles.template}
                onChange={this.handleChange}
              />{" "}
              <label htmlFor="templateB" className={styles.templateLabel}>
                <img
                  src="/assets/designstudio/templateB.jpg"
                  className={styles.templateImg}
                  alt="template B screenshot"
                />
              </label>
              <input
                type="radio"
                name="poster"
                value="posterC"
                id="templateC"
                className={styles.template}
                onChange={this.handleChange}
              />{" "}
              <label htmlFor="templateC" className={styles.templateLabel}>
                <img
                  src="/assets/designstudio/templateC.jpg"
                  className={styles.templateImg}
                  alt="template C screenshot"
                />
              </label>
            </div>
          </fieldset>
        </div>
      </>
    );
  }
}

export default PosterFormat;
