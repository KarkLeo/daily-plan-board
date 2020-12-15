export const stringifyDate = (date) => date.toISOString().split("T")[0];

export const changeDaysInDate = (date, changedDays) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + changedDays);
  return newDate;
};
