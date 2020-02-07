import React from "react";
import styles from "./NotFound.module.css";
// import Form from "../components/Form";

const NotFound = () => {
  return (
    <>
      <div>
        <h1>404</h1>
        <p>Whoops, nothing to see here!</p>
        <p>Feeling lost? Maybe you are looking for one of these pages:</p>
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Designstudio</li>
          <li>Toolbox</li>
        </ul>
      </div>
    </>
  );
};

export default NotFound;
