import { decorate, observable, configure, action, runInAction } from "mobx";
import Request from "../models/Request";
import Api from "../api";

configure({ enforceActions: `observed` });
class RequestStore {
  requests = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`requests`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addRequest));
  };

  addRequest = data => {
    const newRequest = new Request();
    newRequest.updateFromServer(data);
    this.requests.push(newRequest);

    this.api
      .create(newRequest)
      .then(requestValues => newRequest.updateFromServer(requestValues));
  };

  _addRequest = values => {
    const request = new Request();
    request.updateFromServer(values);
    runInAction(() => {
      this.requests.push(request);
    });
  };

  updateRequest = request => {
    this.api
      .update(request)
      .then(requestValues => request.updateFromServer(requestValues));
  };

  deleteRequest = request => {
    this.requests.remove(request);
    this.api.delete(request);
  };
}

decorate(RequestStore, {
  requests: observable,
  addRequest: action,
  deleteRequest: action
});

export default RequestStore;
