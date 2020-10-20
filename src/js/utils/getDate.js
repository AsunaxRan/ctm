export const getDate = (time = Date.now()) => {
  let today = new Date(time);
  let day = today.getDate().toString().padStart(2, '0');
  let month = (today.getMonth() + 1).toString().padStart(2, '0');
  let year = today.getFullYear().toString();

  return {day, month, year};
};