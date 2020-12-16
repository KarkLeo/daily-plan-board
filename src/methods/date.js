export const stringifyDate = (date) => date.toISOString().split("T")[0];

export const changeDaysInDate = (date, changedDays) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + changedDays);
  return newDate;
};

export const reverseSortDate = (a, b) => {
  const aDate = new Date(a);
  const bDate = new Date(b);
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};
