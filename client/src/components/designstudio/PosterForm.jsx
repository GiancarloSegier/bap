import React, { Component } from "react";

class PosterForm extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    this.props.onChangeData(e);
  };

  render() {
    return (
      <>
        <input
          type="text"
          name="title"
          id="title"
          onChange={this.handleChange}
          placeholder="title"
        />
        <input
          type="text"
          name="city"
          id="city"
          onChange={this.handleChange}
          placeholder="city"
        />
      </>
    );
  }
}

export default PosterForm;
