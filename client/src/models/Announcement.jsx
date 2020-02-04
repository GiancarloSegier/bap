import { decorate, observable, computed, action } from "mobx";

class Announceement {
  constructor(id, title, content, images, attachments) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.images = images;
    this.attachments = attachments;
  }

  get values() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      images: this.images,
      attachments: this.attachments
    };
  }

  setId = id => (this.id = id);
  setTitle = title => (this.title = title);
  setContent = content => (this.content = content);
  setImages = images => (this.images = images);
  setAttachments = attachments => (this.attachments = attachments);

  updateFromServer = values => {
    this.setId(values._id);
    this.setTitle(values.title);
    this.setContent(values.content);
    this.setImages(values.images);
    this.setAttachments(values.attachments);
  };
}

decorate(Announceement, {
  id: observable,
  setId: action,
  setTitle: action,
  setContent: action,
  setImages: action,
  setAttachments: action,

  values: computed
});

export default Announceement;
