import React, { Component } from "react";
import modalStyles from "../../styles/modal.module.css";
// import formStyles from "../../styles/form.module.css";
// import { inject, observer } from "mobx-react";
// import { withRouter } from "react-router-dom";
import styles from "./modalForm.module.css";

// import ImageUploading from "react-images-uploading";
import formStyles from "../../styles/form.module.css";
import ImageUploading from "react-images-uploading";
import { inject, observer } from "mobx-react";

class AnnouncementEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fileInput = React.createRef();
  }

  componentDidMount = async () => {
    await this.setValues();
    setTimeout(() => {
      this.setState({ fadeIn: true });
    }, 100);
  };

  setValues = () => {
    const { announcement } = this.props;
    console.log(announcement);
    this.setState({
      title: announcement.title,
      content: announcement.content,
      images: announcement.images,
      attachment: announcement.attachment
    });
  };

  closeForm = e => {
    this.setState({ fadeIn: false });
    setTimeout(() => {
      this.props.onConfirm();
    }, 200);
  };

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };

    state[input.name] = input.value;
    this.setState(state);
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (this.state.formData) {
      await this.uploadImages();
    }

    console.log(this.state);

    if (this.state.fileData) {
      await this.uploadFiles();
    }

    const { title, content, images, attachment } = this.state;
    const { announcement } = this.props;
    if (title !== "" && content !== "") {
      announcement.setTitle(title);
      announcement.setContent(content);
      announcement.setImages(images);
      announcement.setAttachment(attachment);

      this.props.announcementStore.updateAnnouncement(announcement);
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
  closeForm = e => {
    this.setState({ fadeIn: false });
    setTimeout(() => {
      this.props.onConfirm();
    }, 200);
  };

  uploadImages = async () => {
    const { images } = this.state;
    await fetch(`http://localhost:3000/image-upload`, {
      method: "POST",
      body: this.state.formData
    })
      .then(res => res.json())
      .then(resImages => {
        resImages.forEach(image => {
          images.push(image.url);
        });
        this.setState({
          images: images
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
        this.setState({
          attachment: files[0].url
        });
      });
  };

  onImageChange = imageList => {
    const formData = new FormData();
    imageList.forEach((image, i) => {
      formData.append(i, image.file);
    });

    this.setState({ formData: formData });
  };

  onFileChange = e => {
    const files = this.fileInput.current.files;
    const file = files[0];

    const fileData = new FormData();
    fileData.append("file", file);

    this.setState({ fileData: fileData });
  };

  onRemoveExistingImage = (image, i) => {
    console.log(i);
    const { images } = this.state;
    images.splice(i, 1);
    images.filter(image => image !== null);
    this.setState({ images: images });
  };

  render() {
    const { fadeIn, title, content, images, attachment } = this.state;
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
            <div className={styles.oneLine}>
              <h3 className={modalStyles.heading3}>New announcement</h3>
              <button
                type="button"
                className={modalStyles.close__button}
                onClick={this.closeForm}
              >
                <span className={modalStyles.decliner}></span>
              </button>
            </div>
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
                  defaultValue={title}
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
                  defaultValue={content}
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
                    {imageList.map(image => {
                      console.log(image);
                      return (
                        <div key={image.key} className="image-item">
                          <img src={image.dataURL} alt="" width="100" />
                          <div className="image-item__btn-wrapper">
                            <button type="button" onClick={image.onRemove}>
                              Remove
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    {images ? (
                      <>
                        {images.map((image, i) => (
                          <div key={i} className="image-item">
                            <img src={image} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                              <button
                                type="button"
                                onClick={() =>
                                  this.onRemoveExistingImage(image, i)
                                }
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : null}
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
                  defaultValue={attachment}
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

export default inject(`announcementStore`)(observer(AnnouncementEdit));
