class Api {
  constructor(entity) {
    this.entity = entity;
  }

  getAll = async () => {
    const r = await fetch(`/api/${this.entity}`);
    return await r.json();
  };

  getOne = async id => {
    if (id) {
      const r = await fetch(`/api/${this.entity}/${id}`);

      if (r.ok === true) {
        return await r.json();
      } else {
        return r.json();
      }
    } else {
      return null;
    }
  };

  create = async entity => {
    const r = await fetch(
      `/api/${this.entity}`,
      this.getOptions(`post`, entity.values)
    );
    return await r.json();
  };

  update = async entity => {
    const r = await fetch(
      `/api/${this.entity}/${entity.id}`,
      this.getOptions(`put`, entity.values)
    );

    return await r.json();
  };

  delete = async entity => {
    const r = await fetch(
      `/api/${this.entity}/${entity.id}`,
      this.getOptions(`delete`)
    );
    return r.json();
  };

  getOptions = (method, body = null, upload = false) => {
    const options = {
      method: method.toUpperCase()
    };

    if (!upload) {
      options.headers = {
        "content-type": `application/json`
      };
    }
    if (body) {
      if (upload) {
        const formData = new FormData();
        for (var key in body) {
          formData.append(key, body[key]);
        }
        options.body = formData;
      } else {
        options.body = JSON.stringify(body);
      }
    }
    return options;
  };
}

export default Api;
