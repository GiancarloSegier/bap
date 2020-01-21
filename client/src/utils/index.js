import Cookies from "js-cookie";

const decodeJWT = jwt => {
  const base64Url = jwt.split(`.`)[1];
  const base64 = base64Url.replace(/-/g, `+`).replace(/_/g, `/`);
  return JSON.parse(window.atob(base64));
};

const getUserFromCookie = () => {
  const token = Cookies.get(`token`);
  if (token) {
    return decodeJWT(token);
  }
  return null;
};

export { getUserFromCookie };
