import React from "react";
// import styles from "./Requests.module.css";
// import Form from "../components/Form";

import { inject, observer } from "mobx-react";

const Requests = ({ requestStore }) => {
  return (
    <>
      {requestStore.requests.length > 0 ? (
        <div>
          <ul>
            {requestStore.requests.map(request => (
              <li>
                {request.name} - {request.organisation}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Add a new request, please.</p>
      )}
    </>
  );
};

export default inject(`requestStore`)(observer(Requests));
