import axios from "axios";
import qs from "qs";
import { stringifyDate } from "../methods/date";

export const getUsers = async (token) => {
  try {
    let res = await axios.get(`${process.env.REACT_APP_API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getUserTodayTodos = async (token, userId) => {
  let date = new Date();
  return await getUserDateTodos(token, userId, date);
};

export const getUserDateTodos = async (token, userId, date) => {
  const query = qs.stringify({
    _where: [
      { user_ne: userId },
      { date: stringifyDate(date) },
      { status_ne: "deleted" },
    ],
  });
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_API_URL}/todos?${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    return err;
  }
};
