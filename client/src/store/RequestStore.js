import { decorate, observable, configure, action, runInAction } from "mobx";
import Request from "../models/Request";
import Api from "../api";

configure({ enforceActions: `observed` });
class RequestStore {
  requests = [];
  currentRequest = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`requests`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addRequest));
  };

  getOne = id => {
    this.api.getOne(id).then(d => {
      this.currentRequest = d;
      console.log(d);
      console.log(this.currentRequest);
    });
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
    console.log(request);
    this.api
      .update(request)
      .then(requestValues => request.updateFromServer(requestValues));

    // this.requests = [];
    // this.getAll();
  };

  deleteRequest = request => {
    this.requests.remove(request);
    this.api.delete(request);
  };
}

decorate(RequestStore, {
  requests: observable,
  addRequest: action,
  deleteRequest: action,
  getOne: action,
  currentRequest: observable
});

export default RequestStore;
