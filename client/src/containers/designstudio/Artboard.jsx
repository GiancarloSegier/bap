import React, { Component } from "react";
import PosterA from "../../components/designstudio/PosterA";
import PosterB from "../../components/designstudio/PosterB";
import PosterC from "../../components/designstudio/PosterC";

class Artboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div
        style={{
          width: "1123px",
          height: "1588px",
          backgroundColor: "white"
        }}
      >
        {data.poster === "posterA" ? (
          <PosterA data={data} />
        ) : data.poster === "posterB" ? (
          <PosterB data={data} />
        ) : (
          <PosterC data={data} />
        )}
      </div>
    );
  }
}

export default Artboard;
