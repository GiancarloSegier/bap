import React, { Component } from "react";
// import Topbar from "../components/Topbar";
import styles from "./DesignStudio.module.css";
// import Form from "../components/Form";

import ReactToPdf from "react-to-pdf";
import canvasToImage from "canvas-to-image";
import html2canvas from "html2canvas";
import Artboard from "./designstudio/Artboard";
import PosterForm from "../components/designstudio/PosterForm";

class DesignStudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: "Title",
        city: "City"
      }
    };
    this.ref = React.createRef();
  }

  getImage = e => {
    html2canvas(document.getElementById("test")).then(function(canvas) {
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "manpower_efficiency.jpg";
      link.href = canvas.toDataURL();
      link.target = "_blank";
      link.click();
    });
  };

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };

    state.data[input.name] = input.value;
    this.setState(state);
  };
  render() {
    return (
      <>
        <div className={styles.container}>
          <p>Designstudio</p>
          <div>
            <PosterForm onChangeData={this.handleChange} />

            <ReactToPdf
              targetRef={this.ref}
              filename={`${this.state.data.title.split(" ").join("_")}.pdf`}
            >
              {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
            </ReactToPdf>
            <button onClick={this.getImage}>Donwload jpg</button>

            <div ref={this.ref} id="test">
              <Artboard data={this.state.data} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DesignStudio;
