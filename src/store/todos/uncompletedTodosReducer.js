import { getUncompletedTodos } from "../../api/todos";
import { sendEditedTodo } from "../../api/todos";
import { routerDashboard } from "../routerReducer";
import { createDateTodos } from "../../api/todos";
import { updateTodoInList } from "./todayListReducer";
import { fetchTodayList } from "./todayListReducer";

const SET_UNCOMPLETED_TODOS = "SET-UNCOMPLETED-TODOS";
const UPDATE_UNCOMPLETED_TODO = "UPDATE-UNCOMPLETED-TODO";
const TOGGLE_HAS_UNCOMPLETED_TODOS = "TOGGLE-HAS-UNCOMPLETED-TODOS";

const initialState = {
  hasUncompletedTodos: null, // todo create functionality with this properties
  todos: [],
};

const uncompletedTodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UNCOMPLETED_TODOS: {
      return {
        ...state,
        todos: action.todos,
        hasUncompletedTodos: action.todos.length > 0,
      };
    }
    case UPDATE_UNCOMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.todo.id ? action.todo : todo
        ),
      };
    case TOGGLE_HAS_UNCOMPLETED_TODOS:
      return {
        ...state,
        hasUncompletedTodos: action.hasUncompletedTodos,
      };
    default:
      return state;
  }
};

export const setUncompletedTodos = (todos) => ({
  type: SET_UNCOMPLETED_TODOS,
  todos,
});

//todo need change name of this function
export const updateUncompletedTodo = (todo) => ({
  type: UPDATE_UNCOMPLETED_TODO,
  todo,
});
export const toggleHasUncompletedTodo = (hasUncompletedTodos) => ({
  type: TOGGLE_HAS_UNCOMPLETED_TODOS,
  hasUncompletedTodos,
});
// thunk

export const fetchUncompletedTodos = () => async (dispatch, getState) => {
  const token = getState().user_auth.token;
  const userId = getState().user_auth.user.id;
  let todos = await getUncompletedTodos(token, userId);
  if (todos.length) dispatch(setUncompletedTodos(todos));
  else dispatch(routerDashboard());
};

//todo need refactoring this function and todos list reducer
export const editUncompletedTodo = (todo) => async (dispatch, getState) => {
  const token = getState().user_auth.token;

  dispatch(updateUncompletedTodo({ ...todo, isShadow: true }));
  if (todo.status !== "postponed" && todo?.postponed_to?.id) {
    let deletePostponedTodo = await sendEditedTodo(token, {
      ...todo.postponed_to,
      status: "deleted",
    });
  }
  let updateTodo = await sendEditedTodo(token, {
    ...todo,
    postponed_to: null,
  }); // todo check user property
  dispatch(updateUncompletedTodo(updateTodo));
  dispatch(
    toggleHasUncompletedTodo(
      getState().todos_uncompleted.todos.filter(
        (todo) => todo.status === "todo"
      ).length > 0
    )
  );
};

export const postponeUncompletedTodo = (todo, date) => async (
  dispatch,
  getState
) => {
  const token = getState().user_auth.token;
  const userId = getState().user_auth.user.id;
  dispatch(
    updateUncompletedTodo({ ...todo, status: "postponed", isShadow: true })
  );
  let newTodo = await createDateTodos(token, userId, todo, date);
  if (newTodo.id) {
    let updateTodo = await sendEditedTodo(token, {
      ...todo,
      status: "postponed",
      postponed_to: newTodo.id,
    });
    dispatch(updateUncompletedTodo(updateTodo));
  }
  dispatch(
    toggleHasUncompletedTodo(
      getState().todos_uncompleted.todos.filter(
        (todo) => todo.status === "todo"
      ).length > 0
    )
  );
};

export default uncompletedTodosReducer;
