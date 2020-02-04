import { decorate, observable, configure, action, runInAction } from "mobx";
import Request from "../models/Request";
import Api from "../api";

configure({ enforceActions: `observed` });

class RequestStore {
  requests = [];
  currentRequest = {};
  newRequests = [];
  pendingRequests = [];
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`requests`);

    this.getAll();
    this.getPendingRequests();
    this.getAllNewRequests();
  }

  getAll = () => {
    this.requests = [];
    this.api.getAll().then(d => d.forEach(this._addRequest));
  };
  getAllNewRequests = () => {
    this.newRequests = [];
    this.api
      .getAll()
      .then(d =>
        d
          .filter(item => item.pending === false && item.seen === false)
          .forEach(this._addNewRequest)
      );
  };

  getPendingRequests = () => {
    this.pendingRequests = [];
    this.api
      .getAll()
      .then(d =>
        d.filter(item => item.pending === true).forEach(this._addPendingRequest)
      );
  };

  getOne = id => {
    this.api.getOne(id).then(d => {
      if (d !== null) {
        this._getCurrentRequest(d);
      }
    });
  };

  addRequest = data => {
    console.log(data);
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
  _addNewRequest = values => {
    const request = new Request();
    request.updateFromServer(values);
    runInAction(() => {
      this.newRequests.push(request);
    });
  };
  _addPendingRequest = values => {
    const request = new Request();
    request.updateFromServer(values);
    runInAction(() => {
      this.pendingRequests.push(request);
    });
  };

  _getCurrentRequest = values => {
    const request = new Request();
    request.updateFromServer(values);
    runInAction(() => {
      this.currentRequest = request;
    });
  };

  updatePendingRequests = async request => {
    this.newRequests.remove(request);
    this.pendingRequests.push(request);

    await this.api.update(request).then(requestValues => {
      request.updateFromServer(requestValues);
      this.getAllNewRequests();
      this.getPendingRequests();
    });

    // this.getAll();
  };

  updateRequest = request => {
    this.api
      .update(request)
      .then(requestValues => request.updateFromServer(requestValues));
  };

  deleteRequest = async request => {
    this.requests.remove(request);
    await this.api.delete(request);
    // this.getAll();
    this.getAllNewRequests();
    this.getPendingRequests();
  };
}

decorate(RequestStore, {
  getAll: action,
  getAllNewRequests: action,
  getPendingRequests: action,
  requests: observable,
  addRequest: action,
  deleteRequest: action,
  getOne: action,
  currentRequest: observable,
  pendingRequests: observable,
  updateRequest: action,
  updatePendingRequests: action,
  newRequests: observable
});

export default RequestStore;
