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
    this.getAllNewRequests();
    this.getAll();
    this.getPendingRequests();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addRequest));
  };
  getAllNewRequests = () => {
    this.api
      .getAll()
      .then(d =>
        d.filter(item => item.pending === false).forEach(this._addNewRequest)
      );
  };

  getPendingRequests = () => {
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

  updatePendingRequests = request => {
    this.newRequests.remove(request);
    this.pendingRequests.push(request);
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
  deleteRequest: action,
  getOne: action,
  currentRequest: observable,
  pendingRequests: observable,
  updatePendingRequests: action,
  newRequests: observable
});

export default RequestStore;
