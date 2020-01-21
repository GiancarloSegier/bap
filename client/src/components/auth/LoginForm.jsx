import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./Auth.module.css";

const LoginForm = ({ userStore, history }) => {
  const emailInput = React.createRef();
  const pwdInput = React.createRef();
  console.log(userStore);

  const handleSubmit = e => {
    e.preventDefault();
    userStore
      .login(emailInput.current.value, pwdInput.current.value)
      .then(() => {
        history.push(ROUTES.home);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.authBox}>
          <div className={styles.logoBox}>
            <h1 className={styles.logo__img}>
              <span className="hidden">Mr. Todo</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.heading2}>Login</h2>
            <input
              type="email"
              name="email"
              id="email="
              placeholder="email"
              ref={emailInput}
              className={styles.input}
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              ref={pwdInput}
              className={styles.input}
            />

            <input type="submit" value="login" className={styles.button} />

            <p className={styles.subLink}>
              No account?{` `}
              <Link to={ROUTES.request} className={styles.link}>
                Send a request!
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p>{}</p>
        </div>
      </div>
    </>
  );
};

export default inject(`userStore`)(withRouter(LoginForm));
