import React from "react";
// import styles from "./Requests.module.css";
// import Form from "../components/Form";

import { inject, observer } from "mobx-react";

const Teams = ({ jobStore }) => {
  return (
    <>
      {jobStore.jobs.length > 0 ? (
        <div>
          <ul>
            {jobStore.jobs.map(job => (
              <li>
                {job.assignment} - privileges: {job.privileges}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Add a new job, please.</p>
      )}
    </>
  );
};

export default inject(`jobStore`)(observer(Teams));
