import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./Auth.module.css";

const RequestForm = ({ userStore, history }) => {
  const emailInput = React.createRef();
  const cityInput = React.createRef();
  const countryInput = React.createRef();
  const phoneInput = React.createRef();
  const textInput = React.createRef();
  console.log(userStore);

  const handleSubmit = e => {
    const uuidv1 = require("uuid/v1");
    const city = cityInput.current.value;
    const recipient = emailInput.current.value;
    const country = countryInput.current.value;
    const text = textInput.current.value;
    const phone = phoneInput.current.value;
    const requestId = uuidv1();

    e.preventDefault();
    fetch(
      `http://127.0.0.1:4000/send-email?recipient=${recipient}&text=${text}&city=${city}&country=${country}&phone=${phone}&id=${requestId}`
    ).catch(err => console.log(err));
    cityInput.current.value = "";
    emailInput.current.value = "";
    countryInput.current.value = "";
    textInput.current.value = "";
    phoneInput.current.value = "";
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Request acces</h2>
          <input
            type="email"
            name="email"
            id="email="
            placeholder="email"
            ref={emailInput}
            className={styles.input}
          />
          <input
            type="text"
            name="country"
            id="country="
            placeholder="country"
            ref={countryInput}
            className={styles.input}
          />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="city"
            ref={cityInput}
            className={styles.input}
          />
          <input
            type="text"
            name="phone"
            id="phone="
            placeholder="phone"
            ref={phoneInput}
            className={styles.input}
          />
          <textarea
            name="text"
            id="text"
            placeholder="text"
            ref={textInput}
            className={styles.input}
          />

          <input type="submit" value="send request" className={styles.button} />
        </form>
      </div>
    </>
  );
};

export default inject(`userStore`)(withRouter(RequestForm));
