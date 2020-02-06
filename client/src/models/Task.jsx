import { decorate, observable, computed, action } from "mobx";

class Task {
  constructor(id, title, priorityLevel, period, assignees) {
    this.id = id;
    this.title = title;
    this.priorityLevel = priorityLevel;
    this.period = period;
    this.assignees = assignees;
  }

  get values() {
    return {
      id: this.id,
      title: this.title,
      priorityLevel: this.priorityLevel,
      period: this.period,
      assignees: this.assignees
    };
  }

  setId = id => (this.id = id);
  setTitle = title => (this.title = title);
  setPriorityLevel = priorityLevel => (this.priorityLevel = priorityLevel);
  setPeriod = period => (this.period = period);
  setAssignees = assignees => (this.assignees = assignees);

  updateFromServer = values => {
    if (values.id) {
      this.setId(values.id);
    } else {
      this.setId(values._id);
    }
    this.setTitle(values.title);
    this.setPriorityLevel(values.priorityLevel);
    this.setPeriod(values.period);
    this.setAssignees(values.assignees);
  };
}

decorate(Task, {
  id: observable,
  setId: action,
  setTitle: action,
  setPriorityLevel: action,
  setPeriod: action,
  setAssignees: action,
  values: computed
});

export default Task;
