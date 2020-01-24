class Auth {
  login = async (email, password) => {
    const res = await fetch(`/auth/login`, {
      method: `POST`,
      headers: {
        "content-type": `application/json`
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    if (res.status === 200) {
      Promise.resolve();
    } else {
      return res.json().then(data => {
        Promise.reject(data);
      });
    }
  };

  logout = () => {
    return fetch(`/auth/logout`, {
      method: `POST`,
      headers: {
        "content-type": `application/json`
      }
    });
  };

  register = (
    name,
    surname,
    email,
    password,
    job,
    phone,
    organisation,
    committeeId,
    avatarUrl
  ) => {
    return fetch(`/auth/register`, {
      method: `POST`,
      headers: {
        "content-type": `application/json`
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        password,
        job,
        phone,
        organisation,
        committeeId,
        avatarUrl
      })
    }).then(res => {
      if (res.status === 200) {
        Promise.resolve();
      } else {
        Promise.reject();
      }
    });
  };
}

export default Auth;
