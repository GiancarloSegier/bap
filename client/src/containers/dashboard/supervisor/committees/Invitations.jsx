import React, { Component } from "react";
import CommitteesTop from "../../../../components/dashboard/committees/CommitteesTop";

class Invitations extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <CommitteesTop />
        <p>invitations</p>
      </>
    );
  }
}

export default Invitations;
