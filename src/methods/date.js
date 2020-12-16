export const stringifyDate = (date) => date.toISOString().split("T")[0];

export const changeDaysInDate = (date, changedDays) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + changedDays);
  return newDate;
};

export const reverseSortDate = (a, b) => {
  const aDate = new Date(a);
  const bDate = new Date(b);
  if (aDate > bDate) return -1;
  if (aDate < bDate) return 1;
  return 0;
};

export const defaultPostponedDate = (oldDate) => {
  const nowDate = new Date();
  const currentDate = new Date(oldDate);

  if (nowDate.toDateString() === currentDate.toDateString())
    return new Date(nowDate.setDate(nowDate.getDate() + 1));
  else return nowDate;
};
