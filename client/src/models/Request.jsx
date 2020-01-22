import uuid from "uuid";
import { decorate, observable, computed, action } from "mobx";

class Request {
  constructor(id, name, surname, phone, organisation, email, message) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.organisation = organisation;
    this.email = email;
    this.message = message;
  }

  get values() {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      phone: this.phone,
      organisation: this.organisation,
      email: this.email,
      message: this.message
    };
  }

  setId = id => (this.id = id);
  setName = name => (this.name = name);
  setSurname = surname => (this.surname = surname);
  setPhone = phone => (this.phone = phone);
  setOrganisation = organisation => (this.organisation = organisation);
  setEmail = email => (this.email = email);
  setMessage = message => (this.message = message);

  updateFromServer = values => {
    this.setId(values.id);
    this.setName(values.name);
    this.setSurname(values.surname);
    this.setPhone(values.phone);
    this.setOrganisation(values.organisation);
    this.setEmail(values.email);
    this.setMessage(values.message);
  };
}

decorate(Request, {
  id: observable,
  setId: action,
  setName: action,
  setSurname: action,
  setOrganisation: action,
  setPhone: action,
  setEmail: action,
  setMessage: action,
  values: computed
});

export default Request;
