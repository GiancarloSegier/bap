import React, { Component } from "react";

class CommitteesListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { committee } = this.props;
    return (
      <>
        <p>{committee.name}</p>
      </>
    );
  }
}

export default CommitteesListItem;