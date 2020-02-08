import React, { Component } from "react";

class Artboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div ref={this.props.ref} id="test" style={{ width: 1000, height: 1000 }}>
        <div
          style={{
            width: 500,
            height: 500,
            background: "blue",
            position: "relative"
          }}
        >
          <h1 style={{ color: "white", fontSize: "25px" }}>
            {this.props.data.title}
          </h1>
          <h1
            style={{
              color: "white",
              fontSize: "32px",
              position: "absolute",
              bottom: "25px"
            }}
          >
            {this.props.data.city}
          </h1>
        </div>
      </div>
    );
  }
}

export default Artboard;
