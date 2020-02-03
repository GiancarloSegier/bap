import { decorate, observable, computed, action } from "mobx";

class Committee {
  constructor(id, name, raceday, city, country, description) {
    this.id = id;
    this.name = name;
    this.raceday = raceday;
    this.city = city;
    this.country = country;
    this.description = description;
  }

  get values() {
    return {
      id: this.id,
      name: this.name,
      raceday: this.raceday,
      city: this.city,
      country: this.country,
      description: this.description
    };
  }

  setId = id => (this.id = id);
  setName = name => (this.name = name);
  setRaceday = raceday => (this.raceday = raceday);
  setCity = city => (this.city = city);
  setCountry = country => (this.country = country);
  setDescription = description => (this.description = description);

  updateFromServer = values => {
    this.setId(values.id);
    this.setName(values.name);
    this.setRaceday(values.raceday);
    this.setCity(values.city);
    this.setCountry(values.country);
    this.setDescription(values.description);
  };
}

decorate(Committee, {
  id: observable,
  setId: action,
  setName: action,
  setRaceday: action,
  setCity: action,
  setCountry: action,
  setDescription: action,
  values: computed
});

export default Committee;
