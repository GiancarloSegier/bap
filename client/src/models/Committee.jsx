import { decorate, observable, computed, action } from "mobx";

class Committee {
  constructor(
    id,
    name,
    raceday,
    city,
    country,
    description,
    completedTasks,
    logo
  ) {
    this.id = id;
    this.name = name;
    this.raceday = raceday;
    this.city = city;
    this.country = country;
    this.description = description;
    this.completedTasks = completedTasks;
    this.logo = logo;
  }

  get values() {
    return {
      id: this.id,
      name: this.name,
      raceday: this.raceday,
      city: this.city,
      country: this.country,
      description: this.description,
      completedTasks: this.completedTasks,
      logo: this.logo
    };
  }

  setId = id => (this.id = id);
  setName = name => (this.name = name);
  setRaceday = raceday => (this.raceday = raceday);
  setCity = city => (this.city = city);
  setCountry = country => (this.country = country);
  setDescription = description => (this.description = description);
  setCompletedTasks = completedTasks => {
    this.completedTasks = completedTasks;
  };
  setLogo = logo => (this.logo = logo);

  updateFromServer = values => {
    if (values._id) {
      this.setId(values._id);
    } else {
      this.setId(values.id);
    }
    this.setName(values.name);
    this.setRaceday(values.raceday);
    this.setCity(values.city);
    this.setCountry(values.country);
    this.setDescription(values.description);
    this.setCompletedTasks(values.completedTasks);
    this.setLogo(values.logo);
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
  setCompletedTasks: action,
  setLogo: action,
  values: computed
});

export default Committee;
