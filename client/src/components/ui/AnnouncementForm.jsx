import React, { Component } from "react";
import modalStyles from "../../styles/modal.module.css";
import uiStyles from "../../styles/ui.module.css";
import formStyles from "../../styles/form.module.css";
import announceStyles from "../dashboard/announcements/Announcement.module.css";
import { inject, observer } from "mobx-react";
import styles from "./modalForm.module.css";
import FontAwesome from "react-fontawesome";
import ImageUploading from "react-images-uploading";

class AnnouncementForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
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

    if (this.state.formData) {
      await this.uploadImages();
    }
    if (this.state.fileData) {
      await this.uploadFiles();
    }

    const { title, content, images, attachment } = this.state;
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
  closeForm = e => {
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

  render() {
    const { fadeIn, title, content } = this.state;

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
                {({ imageList, onImageUpload }) => (
                  <>
                    <div className={formStyles.upload_image_wrapper}>
                      {imageList.map(image => (
                        <div
                          className={formStyles.imageContainer}
                          key={image.key}
                        >
                          <img
                            className={formStyles.uploaded_item}
                            src={image.dataURL}
                            alt=""
                            width="100"
                          />

                          <button
                            type="button"
                            className={formStyles.removeImage}
                            onClick={image.onRemove}
                          >
                            <span className={formStyles.decliner}></span>
                          </button>
                        </div>
                      ))}
                    </div>
                    {imageList.length !== 0 ? (
                      <p className={announceStyles.counter}>
                        {imageList.length}/5
                      </p>
                    ) : (
                      <p className={announceStyles.counter}>
                        No images selected
                      </p>
                    )}

                    <div className={formStyles.announcement_buttons}>
                      <div className={styles.btn_group}>
                        <button
                          type="button"
                          onClick={onImageUpload}
                          className={announceStyles.icon_button}
                          disabled={imageList.length === 5}
                        >
                          <FontAwesome
                            name="photo"
                            className={announceStyles.photo}
                          />
                        </button>

                        <label
                          htmlFor="attachments"
                          className={
                            announceStyles.icon_button +
                            " " +
                            (this.state.fileData
                              ? announceStyles.icon_select
                              : null)
                          }
                        >
                          <FontAwesome
                            name="paperclip"
                            className={announceStyles.paperclip_icon}
                          />
                        </label>
                      </div>

                      <div className={modalStyles.buttonBox}>
                        <button
                          type="submit"
                          className={uiStyles.textButton}
                          disabled={!title || !content}
                        >
                          <span
                            className={
                              formStyles.checker + " " + formStyles.margin
                            }
                          >
                            {" "}
                          </span>{" "}
                          Place announcement
                        </button>
                      </div>
                      <input
                        type="file"
                        name="attachments"
                        id="attachments"
                        accept="application/pdf,application/vnd.ms-excel"
                        placeholder="attachments"
                        ref={this.fileInput}
                        className={
                          formStyles.form__input + " " + formStyles.hidden
                        }
                        onChange={this.onFileChange}
                      />
                    </div>
                  </>
                )}
              </ImageUploading>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default inject(`announcementStore`)(observer(AnnouncementForm));
