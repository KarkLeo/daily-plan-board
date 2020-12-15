import { getUserDateTodos } from "../../api/users";

const SET_USERS_TODOS = "SET-USERS-TODOS";

const initialState = {
  todos: {},
};

const usersTodosReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_TODOS:
      return {
        ...state,
        todos: action.todos,
      };
    default:
      return state;
  }
};

export const setUsersTodos = (todos) => ({ type: SET_USERS_TODOS, todos });

// thunk

export const fetchUsersTodos = () => async (dispatch, getState) => {
  const token = getState().user_auth.token;
  const userId = getState().user_auth.user.id;
  const date = getState().todos_selection.date;
  let data = await getUserDateTodos(token, userId, date);
  const users = getState().users_list.users;
  let todos = {};
  users.forEach((user) => {
    todos[user.id] = data.filter((todo) => todo.user.id === user.id);
  });
  dispatch(setUsersTodos(todos));
};

export default usersTodosReduser;
