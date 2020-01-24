import React from "react";
// import styles from "./Requests.module.css";
// import Form from "../components/Form";

import { inject, observer, PropTypes } from "mobx-react";
import RequestDetail from "../../../components/dashboard/RequestDetail";

const Requests = ({ requestStore }) => {
  const onUpdateRequest = async request => {
    await requestStore.updateRequest(request);

    await fetch(
      `http://127.0.0.1:4000/send-mail?type=invite&id=${request.id}&name=${request.name}&recipient=${request.email}&organisation=${request.organisation}`
    ).catch(err => console.log(err));
  };
  return (
    <>
      {requestStore.requests.length > 0 ? (
        <div>
          <ul>
            {requestStore.requests.map(request => (
              <RequestDetail
                currentRequest={request}
                onUpdateRequest={onUpdateRequest}
              />
            ))}
          </ul>
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
