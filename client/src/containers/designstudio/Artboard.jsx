import React, { Component } from "react";
import PosterA from "../../components/designstudio/PosterA";
import PosterB from "../../components/designstudio/PosterB";
import PosterC from "../../components/designstudio/PosterC";
import styles from "../Dashboard.module.css";

class Artboard extends Component {
  render() {
    const { data, onUploadSponsors, onRemoveSponsor } = this.props;
    return (
      <div className={styles.artboard}>
        {data.poster === "posterA" ? (
          <PosterA
            data={data}
            onUploadSponsors={onUploadSponsors}
            onRemoveSponsor={onRemoveSponsor}
          />
        ) : data.poster === "posterB" ? (
          <PosterB
            data={data}
            onUploadSponsors={onUploadSponsors}
            onRemoveSponsor={onRemoveSponsor}
          />
        ) : (
          <PosterC
            data={data}
            onUploadSponsors={onUploadSponsors}
            onRemoveSponsor={onRemoveSponsor}
          />
        )}
      </div>
    );
  }
}

export default Artboard;
