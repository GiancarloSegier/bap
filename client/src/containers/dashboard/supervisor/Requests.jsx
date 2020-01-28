import React from "react";
import styles from "../platform.module.css";
// import Form from "../components/Form";

import { inject, observer, PropTypes } from "mobx-react";
import Request from "../../../components/dashboard/Request";

const Requests = ({ requestStore }) => {
  const onUpdateRequest = async request => {
    await requestStore.updateRequest(request);

    await fetch(
      `http://localhost:4000/send-mail?type=invite&id=${request.id}&name=${request.name}&recipient=${request.email}&organisation=${request.organisation}`
    ).catch(err => console.log(err));
  };
  return (
    <>
      <h1 className={styles.heading1}>Requests</h1>
      {requestStore.requests.length > 0 ? (
        <div className={styles.headGrid}>
          <div className={styles.borderRight + " " + styles.cardGrid}>
            {requestStore.requests.map(request => (
              <Request
                currentRequest={request}
                onUpdateRequest={onUpdateRequest}
              />
            ))}
          </div>
          <div>
            <p>Detail card comes here</p>
          </div>
        </div>
      ) : (
        <p>Add a new request, please.</p>
      )}
    </>
  );
};

Requests.propTypes = {
  requestStore: PropTypes.observableObject.isRequired
};

export default inject(`requestStore`)(observer(Requests));
