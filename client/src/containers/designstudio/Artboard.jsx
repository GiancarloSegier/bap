import React, { Component } from "react";
import PosterA from "../../components/designstudio/PosterA";

class Artboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          width: "1123px",
          height: "1588px",
          backgroundColor: "white"
        }}
      >
        <PosterA data={this.props.data} />
      </div>
    );
  }
}

export default Artboard;
