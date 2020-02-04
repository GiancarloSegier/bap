import React, { Component } from "react";
import modalStyles from "../../styles/modal.module.css";
import formStyles from "../../styles/form.module.css";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import styles from "./AnnouncementForm.module.css";

import ImageUploading from "react-images-uploading";

class AnnouncementForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      conten: "",
      attachments: "",
      images: [],
      error: false
    };
    this.imageInput = React.createRef();
    this.fileInput = React.createRef();
    this.titleInput = React.createRef();
    this.contentInput = React.createRef();
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ fadeIn: true });
    }, 100);
  };
  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };

    state[input.name] = input.value;
    this.setState(state);
  };

  handleSubmit = async e => {
    e.preventDefault();

    await this.uploadImages();
    await this.uploadFiles();

    const { title, content, images, attachment } = this.state;
    console.log(images);
    if (title !== "" && content !== "") {
      this.props.announcementStore.addAnnouncement({
        title: title,
        content: content,
        images: images,
        attachment: attachment
      });
      this.setState({
        title: "",
        content: "",
        images: [],
        attachment: ""
      });
    } else {
      this.setState({ error: true });
    }
    this.setState({ fadeIn: false });
    setTimeout(() => {
      this.props.onConfirm();
    }, 200);
  };

  uploadImages = async () => {
    await fetch(`http://localhost:3000/image-upload`, {
      method: "POST",
      body: this.state.formData
    })
      .then(res => res.json())
      .then(images => {
        const imgUrls = [];
        images.forEach(image => {
          imgUrls.push(image.url);
        });
        this.setState({
          images: imgUrls
        });
      });
  };
  uploadFiles = async () => {
    await fetch(`http://localhost:3000/image-upload`, {
      method: "POST",
      body: this.state.fileData
    })
      .then(res => res.json())

      .then(files => {
        console.log(files);
        this.setState({
          attachment: files[0].url
        });
      });
  };

  deleteImg = e => {
    e.preventDefault();
    console.log("klikske");
  };

  onImageChange = imageList => {
    const formData = new FormData();
    imageList.forEach((image, i) => {
      formData.append(i, image.file);
    });

    this.setState({ formData: formData });
    console.log(imageList);
  };

  onFileChange = e => {
    const files = this.fileInput.current.files;
    const file = files[0];

    const fileData = new FormData();
    fileData.append("file", file);

    this.setState({ fileData: fileData });
  };

  render() {
    const { fadeIn, title, content, images } = this.state;
    console.log(images);
    return (
      <div
        className={
          modalStyles.modalBackground +
          " " +
          (fadeIn ? modalStyles.fadeIn : null)
        }
      >
        <div
          className={
            modalStyles.floatingModal +
            " " +
            modalStyles.biggerModal +
            " " +
            (fadeIn ? modalStyles.fadeIn : null)
          }
        >
          <div className={modalStyles.modalContainer}>
            <h3>New announcement</h3>
          </div>
          <div
            className={
              modalStyles.modalContainer + " " + modalStyles.divideBorder
            }
          >
            <form onSubmit={this.handleSubmit}>
              <fieldset className={formStyles.form__group}>
                <label htmlFor="email" className={formStyles.form__label}>
                  Post title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  ref={this.titleInput}
                  className={formStyles.form__input}
                  onChange={this.handleChange}
                />
              </fieldset>
              <fieldset className={formStyles.form__group}>
                <label htmlFor="email" className={formStyles.form__label}>
                  Post content
                </label>
                <textarea
                  name="content"
                  id="content"
                  placeholder="Make your announcement here"
                  rows="10"
                  ref={this.messageInput}
                  className={
                    formStyles.form__input + " " + formStyles.form__textarea
                  }
                  onChange={this.handleChange}
                />
              </fieldset>

              <ImageUploading
                mode="multiple"
                onChange={this.onImageChange}
                maxNumber="5"
              >
                {({ imageList, onImageUpload, onImageRemoveAll }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <button type="button" onClick={onImageUpload}>
                      Upload images
                    </button>
                    &nbsp;
                    <button type="button" onClick={onImageRemoveAll}>
                      Remove all images
                    </button>
                    {imageList.map(image => (
                      <div key={image.key} className="image-item">
                        <img src={image.dataURL} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                          <button type="button" onClick={image.onUpdate}>
                            Update
                          </button>
                          <button type="button" onClick={image.onRemove}>
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>

              <fieldset className={formStyles.form__group}>
                <label htmlFor="attachments" className={formStyles.form__label}>
                  Attachment
                </label>
                <input
                  type="file"
                  name="attachments"
                  id="attachments"
                  accept="application/pdf,application/vnd.ms-excel"
                  placeholder="attachments"
                  ref={this.fileInput}
                  className={formStyles.form__input}
                  onChange={this.onFileChange}
                />
              </fieldset>

              <div className={modalStyles.buttonBox}>
                <input
                  type="submit"
                  value="Login"
                  className={formStyles.form__button}
                  disabled={!title || !content}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default inject(`announcementStore`)(withRouter(AnnouncementForm));
