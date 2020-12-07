import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import registerReducer from "./user/registerReducer";
import loginReducer from "./user/loginReducer";
import authReducer from "./user/authReducer";

import todayListReducer from "./todos/todayListReducer";
import createTodosReducer from "./todos/createTodosReducer";

import usersListReducer from "./users/usersListReducer";

import routerReducer from "./routerReducer";
import usersTodosReducer from "./users/usersTodosReducer";

let reducer = combineReducers({
  user_register: registerReducer,
  user_login: loginReducer,
  user_auth: authReducer,

  todos_todayList: todayListReducer,
  todos_createTodo: createTodosReducer,

  users_list: usersListReducer,
  users_todos: usersTodosReducer,

  router: routerReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
