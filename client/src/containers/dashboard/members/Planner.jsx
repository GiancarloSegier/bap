import React, { Component } from "react";
// import styles from "./Planner.module.css";
// import Form from "../components/Form";
import { inject, observer } from "mobx-react";
import TaskItem from "../../../components/dashboard/planner/TaskItem";

class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    // await this.getMember();
  };

  getMember = async () => {
    const { users, authUser, committeeMembers } = await this.props.userStore;

    this.setState({ committeeMembers: committeeMembers });
  };

  render() {
    const { tasks } = this.props.taskStore;
    const { committeeMembers } = this.props.userStore;
    console.log(committeeMembers);

    return (
      <>
        <div>
          <p>Planner</p>

          {tasks.map((task, i) => {
            return <TaskItem key={i} task={task} members={committeeMembers} />;
          })}
        </div>
      </>
    );
  }
}

export default inject(`taskStore`, `userStore`)(observer(Planner));
