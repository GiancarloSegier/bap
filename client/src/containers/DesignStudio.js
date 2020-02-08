import React from "react";
// import Topbar from "../components/Topbar";
import styles from "./DesignStudio.module.css";
// import Form from "../components/Form";

import ReactToPdf from "react-to-pdf";
import canvasToImage from "canvas-to-image";
import html2canvas from "html2canvas";

const DesignStudio = () => {
  const ref = React.createRef();

  const getImage = e => {
    html2canvas(document.getElementById("test")).then(function(canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "manpower_efficiency.jpg";
      link.href = canvas.toDataURL();
      link.target = "_blank";
      link.click();
    });
  };

  return (
    <>
      <div className={styles.container}>
        <p>Designstudio</p>
        <div>
          <ReactToPdf targetRef={ref} filename="div-blue.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
          </ReactToPdf>
          <button onClick={getImage}>Donwload jpg</button>
          <div ref={ref} id="test" style={{ width: 1000, height: 1000 }}>
            <div style={{ width: 500, height: 500, background: "blue" }}>
              <h1 style={{ color: "white", fontSize: "25px" }}>
                Hallo Laurens
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignStudio;
