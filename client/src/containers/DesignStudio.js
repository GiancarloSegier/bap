import React, { Component } from "react";
import styles from "./Dashboard.module.css";
import modalStyles from "../styles/modal.module.css";
import uiStyles from "../styles/ui.module.css";

import Artboard from "./designstudio/Artboard";
import PosterForm from "../components/designstudio/PosterForm";
import domtoimage from "dom-to-image";

import * as htmlToImage from "html-to-image";
import JSpdf from "jspdf";
import PosterFormat from "../components/designstudio/PosterFormat";
import FontAwesome from "react-fontawesome";

class DesignStudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentView: "FORMAT",
      data: {
        raceday: "29-09-2020",
        city: "Antwerpen",
        location: "Frederik van Eedenplein",
        site: "raceforthecure.com",
        hours: "9:00 - 14:00",

        logo: "./assets/designstudio/logothinkpink.png",
        walking: 3,
        running: 6,
        sponsorborder: "off",
        loading: false,
        poster: "posterA",
        export: "pdf"
      }
    };
    this.ref = React.createRef();
    this.options = {
      orientation: "p",
      unit: "px",
      format: "a3",
      floatPrecision: 16
    };
  }

  componentDidMount() {
    this.calcScale();
    window.addEventListener("resize", this.calcScale);
  }

  calcScale = () => {
    const scaleLevel = (window.innerHeight * 0.5) / 1000;
    const margin = -window.innerHeight * 1.5;
    this.setState({ scale: scaleLevel, margin: margin });
  };

  exportDesign = async (e, data) => {
    this.setState({ loading: true });
    const exportBlock = document.getElementById("artboard");
    exportBlock.style.transform = "scale(1)";
    if (data.export === "pdf") {
      htmlToImage
        .toCanvas(exportBlock)
        .then(function(canvas) {
          document.body.appendChild(canvas);
          const imgData = canvas.toDataURL("image/jpg");
          const pdf = new JSpdf("p", "px", [1123, 1588]);
          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();
          pdf.addImage(imgData, "JPG", 0, 0, width, height);
          pdf.save(`raceforthecure.pdf`);
        })
        .then(() => {
          exportBlock.style.transform = `scale(${this.state.scale})`;
          this.setState({ loading: false });
        });
    } else {
      domtoimage
        .toJpeg(exportBlock, { quality: 0.95 })
        .then(function(dataUrl) {
          var link = document.createElement("a");
          link.download = "raceforthecure.jpeg";
          link.href = dataUrl;
          link.click();
        })
        .then(() => {
          exportBlock.style.transform = `scale(${this.state.scale})`;
          this.setState({ loading: false });
        });
    }
  };

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };

    if (input.name === "sponsorborder") {
      if (this.state.data.sponsorborder === "on") {
        state.data[input.name] = "off";
      } else {
        state.data[input.name] = input.value;
      }
    } else if (input.name === "raceday") {
      if (input.value) {
        const dateParts = input.value.split("-");

        const dateString = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        state.data[input.name] = dateString;
      } else {
        state.data[input.name] = "";
      }
    } else if (input.type === "file") {
      console.log("file uploaded");

      state.data[input.name] = URL.createObjectURL(input.files[0]);
    } else {
      state.data[input.name] = input.value;
    }
    this.setState(state);
    console.log(this.state);
  };

  render() {
    const { contentView } = this.state;
    console.log(this.state);
    return (
      <>
        {this.state.loading ? (
          <div className={styles.loadingScreen}>
            <p>loading</p>
          </div>
        ) : null}
        <div className={styles.dashboardGrid}>
          <div className={styles.designStudioNav}>
            <div
              className={
                styles.navContainer + " " + modalStyles.divideBorderBottom
              }
            >
              <button
                onClick={() => this.setState({ contentView: "FORMAT" })}
                className={
                  styles.designStudioButtons +
                  " " +
                  (contentView === "FORMAT" ? styles.activeView : null)
                }
              >
                Format
              </button>
              <button
                onClick={() => this.setState({ contentView: "CONTENT" })}
                className={
                  styles.designStudioButtons +
                  " " +
                  (contentView === "CONTENT" ? styles.activeView : null)
                }
              >
                Content
              </button>
            </div>

            {contentView === "FORMAT" ? (
              <PosterFormat onChangeData={this.handleChange} />
            ) : (
              <PosterForm onChangeData={this.handleChange} />
            )}

            <fieldset
              className={
                modalStyles.modalContainer + " " + modalStyles.divideBorder
              }
            >
              <div className={styles.exportBlock}>
                <div className={styles.exportTypeButtons}>
                  <input
                    type="radio"
                    name="export"
                    value="pdf"
                    id="pdf"
                    onChange={this.handleChange}
                    defaultChecked
                  />
                  <label htmlFor="pdf" className={styles.exportButton}>
                    PDF
                  </label>
                  <input
                    type="radio"
                    name="export"
                    value="jpg"
                    id="jpg"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="jpg" className={styles.exportButton}>
                    JPG
                  </label>
                </div>
                <button
                  onClick={e => this.exportDesign(e, this.state.data)}
                  className={uiStyles.textButton}
                >
                  <FontAwesome
                    name="download"
                    className={styles.button__icon}
                  />
                  download
                </button>
              </div>
            </fieldset>
          </div>
          <div className={styles.designStudioContent}>
            <div className={"container"}>
              <div className={styles.artboardFrame}>
                <div
                  id="artboard"
                  className={styles.scaledFrame}
                  style={{
                    transform: `scale(${this.state.scale}`,
                    marginBottom: this.state.margin
                  }}
                >
                  <Artboard data={this.state.data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DesignStudio;
