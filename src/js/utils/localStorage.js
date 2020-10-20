export const isLocalDataExist = (key) => {
  return localStorage.getItem("key") ? true : false;
};

export const getLocalData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setLocalData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};