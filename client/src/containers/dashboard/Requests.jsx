import React from "react";
// import styles from "./Requests.module.css";
// import Form from "../components/Form";

import { inject, observer } from "mobx-react";

const Requests = ({ requestStore }) => {
  const approveRequest = request => {
    console.log(request);
    fetch(
      `http://127.0.0.1:4000/send-mail?type=invite&id=${request.id}&name=${request.name}&recipient=${request.email}&organisation=${request.organisation}`
    ).catch(err => console.log(err));
  };
  return (
    <>
      {requestStore.requests.length > 0 ? (
        <div>
          <ul>
            {requestStore.requests.map(request => (
              <li>
                {request.name} - {request.organisation}
                <button onClick={() => approveRequest(request)}>
                  Approve request
                </button>
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
