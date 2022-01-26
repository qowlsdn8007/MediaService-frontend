export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return String(email).match(re) ? false : true;
};

export const validatePassword = (password) => {
  const re = /^(?=.*[a-zA-Z])((?=.*\\d)(?=.*\\W)).{8,20}$/;
  return String(password).match(re) ? false : true;
};
