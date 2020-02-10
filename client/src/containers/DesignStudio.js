import React, { Component } from "react";
// import Topbar from "../components/Topbar";
import styles from "./Dashboard.module.css";
import modalStyles from "../styles/modal.module.css";
// import Form from "../components/Form";

import ReactToPdf from "react-to-pdf";
import canvasToImage from "canvas-to-image";
import html2canvas from "html2canvas";
import Artboard from "./designstudio/Artboard";
import PosterForm from "../components/designstudio/PosterForm";

import htmlToImage from "html-to-image";
import JSpdf from "jspdf";
import { transform } from "html2canvas";
import PosterFormat from "../components/designstudio/PosterFormat";

class DesignStudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentView: "FORMAT",
      data: {
        title: "Race for the cure",
        raceday: "29-09-2020",
        city: "Antwerpen",
        location: "Frederik van Eedenplein",
        site: "raceforthecure.com",
        sponsorborder: "off",
        loading: false,
        poster: "posterA"
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

  exportDesign = async (e, data, format) => {
    this.setState({ loading: true });
    const exportBlock = document.getElementById("test");
    exportBlock.style.transform = "scale(1)";
    if (format === "pdf") {
      htmlToImage
        .toCanvas(exportBlock)
        .then(function(canvas) {
          document.body.appendChild(canvas);
          const imgData = canvas.toDataURL("image/jpg");
          const pdf = new JSpdf("p", "px", [1123, 1588]);
          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();
          pdf.addImage(imgData, "JPG", 0, 0, width, height);
          pdf.save(`${data.title}.pdf`);
        })
        .then(() => {
          exportBlock.style.transform = `scale(${this.state.scale})`;
          this.setState({ loading: false });
        });
    } else {
      htmlToImage
        .toJpeg(exportBlock, {
          quality: 0.95
        })
        .then(dataUrl => {
          var link = document.createElement("a");
          link.download = `${data.title}.jpg`;
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
    } else {
      state.data[input.name] = input.value;
    }
    this.setState(state);
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
            <div className={styles.navContainer}>
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
            <div
              className={styles.navContainer + " " + modalStyles.divideBorder}
            >
              <button
                onClick={e => this.exportDesign(e, this.state.data, "jpg")}
              >
                Donwload jpg
              </button>
              <button
                onClick={e => this.exportDesign(e, this.state.data, "pdf")}
              >
                Donwload pdf
              </button>
            </div>
          </div>
          <div className={styles.designStudioContent}>
            <div className={"container"}>
              <div className={styles.artboardFrame}>
                <div
                  id="test"
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
