import { decorate, observable, computed, action } from "mobx";

class Announceement {
  constructor(id, title, text, images, attachments) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.images = images;
    this.attachments = attachments;
  }

  get values() {
    return {
      id: this.id,
      title: this.title,
      text: this.text,
      images: this.images,
      attachments: this.attachments
    };
  }

  setId = id => (this.id = id);
  setTitle = title => (this.title = title);
  setText = text => (this.text = text);
  setImages = images => (this.images = images);
  setAttachments = attachments => (this.attachments = attachments);

  updateFromServer = values => {
    this.setId(values._id);
    this.setTitle(values.title);
    this.setText(values.text);
    this.setImages(values.images);
    this.setAttachments(values.attachments);
  };
}

decorate(Announceement, {
  id: observable,
  setId: action,
  setTitle: action,
  setText: action,
  setImages: action,
  setAttachments: action,

  values: computed
});

export default Announceement;
