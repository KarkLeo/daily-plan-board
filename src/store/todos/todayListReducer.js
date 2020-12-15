import { sendEditedTodo } from "../../api/todos";
import { getDateTodos } from "../../api/todos";

const SET_TODAY_LIST = "SET-TODAY-LIST";
const UPDATE_TODO_IN_LIST = "UPDATE-TODO-IN-LIST";

const initialState = {
  todos: [],
};

const todayListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODAY_LIST:
      return {
        ...state,
        todos: action.todos,
      };
    case UPDATE_TODO_IN_LIST:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.todo.id ? action.todo : todo
        ),
      };
    default:
      return state;
  }
};

export const setTodayList = (todos) => ({ type: SET_TODAY_LIST, todos });
export const updateTodoInList = (todo) => ({ type: UPDATE_TODO_IN_LIST, todo });

// thunk

export const fetchTodayList = () => async (dispatch, getState) => {
  const token = getState().user_auth.token;
  const userId = getState().user_auth.user.id;
  const date = getState().todos_selection.date;
  let todos = await getDateTodos(token, userId, date);
  dispatch(setTodayList(todos));
};

export const editTodo = (todo) => async (dispatch, getState) => {
  const token = getState().user_auth.token;
  dispatch(updateTodoInList({ ...todo, isShadow: true }));
  let updateTodo = await sendEditedTodo(token, { ...todo, user: todo.user.id });
  dispatch(fetchTodayList());
};

export default todayListReducer;
