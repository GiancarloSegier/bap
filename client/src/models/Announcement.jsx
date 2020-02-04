import { decorate, observable, computed, action } from "mobx";

class Announceement {
  constructor(id, title, content, images, attachment, createdAt) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.images = images;
    this.attachment = attachment;
    this.createdAt = createdAt;
  }

  get values() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      images: this.images,
      attachment: this.attachment,
      createdAt: this.createdAt
    };
  }

  setId = id => (this.id = id);
  setTitle = title => (this.title = title);
  setContent = content => (this.content = content);
  setImages = images => (this.images = images);
  setAttachment = attachment => (this.attachment = attachment);
  setDate = createdAt => (this.createdAt = createdAt);

  updateFromServer = values => {
    this.setId(values._id);
    this.setTitle(values.title);
    this.setContent(values.content);
    this.setImages(values.images);
    this.setAttachment(values.attachment);
    this.setDate(values.createdAt);
  };
}

decorate(Announceement, {
  id: observable,
  setId: action,
  setTitle: action,
  setContent: action,
  setImages: action,
  setAttachment: action,
  setDate: action,
  values: computed
});

export default Announceement;
