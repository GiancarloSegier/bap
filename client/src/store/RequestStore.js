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
  getAllNewRequests = async () => {
    this.newRequests = [];
    await this.api
      .getAll()
      .then(d =>
        d.filter(item => item.pending === false).forEach(this._addNewRequest)
      );
  };

  getPendingRequests = async () => {
    this.pendingRequests = [];
    await this.api
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

  addRequest = async data => {
    const newRequest = new Request();
    newRequest.updateFromServer(data);
    this.requests.push(newRequest);

    await this.api
      .create(newRequest)
      .then(requestValues => newRequest.updateFromServer(requestValues));
    await this.getAllNewRequests();
    await this.getPendingRequests();
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
    });
  };

  updateRequest = async request => {
    await this.api
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
