import axios from "axios";
import qs from "qs";
import { stringifyDate } from "../methods/date";

export const getTodayTodos = async (token, userId) => {
  let date = new Date();
  return await getDateTodos(token, userId, date);
};

export const getDateTodos = async (token, userId, date) => {
  const query = qs.stringify({
    _where: [
      { user: userId },
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

export const getUncompletedTodos = async (token, userId) => {
  let date = new Date();
  const query = qs.stringify({
    _where: [
      { user: userId },
      { date_lt: stringifyDate(date) },
      { status: "todo" },
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

export const createTodayTodos = async (token, userId, newTodo) => {
  let date = new Date();
  try {
    let res = await axios.post(
      `${process.env.REACT_APP_API_URL}/todos`,
      {
        title: newTodo.title,
        user: userId,
        date: stringifyDate(date),
        status: "todo",
      },
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

export const createDateTodos = async (token, userId, newTodo, date) => {
  try {
    let res = await axios.post(
      `${process.env.REACT_APP_API_URL}/todos`,
      {
        title: newTodo.title,
        user: userId,
        date: stringifyDate(date),
        status: "todo",
      },
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

export const sendEditedTodo = async (token, todo) => {
  try {
    let res = await axios.put(
      `${process.env.REACT_APP_API_URL}/todos/${todo.id}`,
      {
        ...todo,
      },
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
