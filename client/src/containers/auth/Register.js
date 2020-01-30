import React, { Component } from "react";
import styles from "./Auth.module.css";
import MemberRegisterForm from "../../components/auth/MemberRegisterForm";
import AdminRegisterForm from "../../components/auth/AdminRegisterForm";

class Register extends Component {
  constructor(props) {
    super(props);
    const query = new URLSearchParams(props.location.search);

    this.state = {
      avatar: false,
      newPhone: "",
      password: "",
      password2: "",
      type: query.get("type")
    };
  }

  onUpdate = props => {
    this.setState({
      avatar: props.avatar,
      newPhone: props.newPhone,
      password: props.password,
      password2: props.password2
    });
  };
  render() {
    const { type, avatar, newPhone, password, password2 } = this.state;
    return (
      <>
        <div className={styles.divide + " mediumcontainer"}>
          <h1 className="hidden">Loginpage</h1>
          <div>
            <h2 className={styles.subtitle}>Almost there...</h2>
            <p className={styles.title}>Complete your profile</p>
            <ul>
              <li className={styles.checkListItem}>
                <span
                  className={
                    styles.checkListNumber +
                    " " +
                    (avatar ? styles.checked : null)
                  }
                >
                  {avatar ? <span className={styles.checker}></span> : "1"}
                </span>
                Upload a profile picture
              </li>
              <li className={styles.checkListItem}>
                <span
                  className={
                    styles.checkListNumber +
                    " " +
                    (password && password2 && password === password2
                      ? styles.checked
                      : null)
                  }
                >
                  {password && password2 && password === password2 ? (
                    <span className={styles.checker}></span>
                  ) : (
                    "2"
                  )}
                </span>
                Choose your own password
              </li>
              {type === "admin" ? null : (
                <li className={styles.checkListItem}>
                  <span
                    className={
                      styles.checkListNumber +
                      " " +
                      (newPhone ? styles.checked : null)
                    }
                  >
                    {newPhone ? <span className={styles.checker}></span> : "3"}
                  </span>
                  Add phonenumber
                </li>
              )}
            </ul>
          </div>
          {type === "admin" ? (
            <AdminRegisterForm onUpdate={this.onUpdate} />
          ) : (
            <MemberRegisterForm onUpdate={this.onUpdate} />
          )}
        </div>
      </>
    );
  }
}

export default Register;
