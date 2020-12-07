import axios from "axios";
import qs from "qs";
import { stringifyDate } from "../methods/date";

export const getTodayTodos = async (token, userId) => {
  let date = new Date();
  const query = qs.stringify({
    _where: [
      { user: userId },
      { date: stringifyDate(date) },
      { status_ne: "deleted" },
    ],
  });
  try {
    let res = await axios.get(`http://localhost:1337/todos?${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const createTodayTodos = async (token, userId, newTodo) => {
  let date = new Date();
  try {
    let res = await axios.post(
      "http://localhost:1337/todos",
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
      `http://localhost:1337/todos/${todo.id}`,
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
