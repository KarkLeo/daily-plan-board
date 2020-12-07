import { createTodayTodos, getTodayTodos } from "../../api/todos";
import { setTodayList } from "./todayListReducer";

const CHANGE_NEW_TODO_TITLE = "CHANGE-NEW-TODO-TITLE";
const ClEAN_NEW_TODO = "ClEAN-NEW-TODO";
const SHOW_NEW_TODO_FORM = "SHOW-NEW-TODO-FORM";
const HIDE_NEW_TODO_FORM = "HIDE-NEW-TODO-FORM";
const ADD_SHADOW_TODO = "ADD-SHADOW-TODO";
const REMOVE_SHADOW_TODO = "REMOVE-SHADOW-TODO";

const initialState = {
  newTodo: {
    title: "",
  },
  isShowForm: false,
  shadowTodos: [],
};

const createTodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NEW_TODO_TITLE:
      return {
        ...state,
        newTodo: {
          ...state.newTodo,
          title: action.title,
        },
      };
    case ClEAN_NEW_TODO:
      return {
        ...state,
        newTodo: {
          title: "",
        },
      };
    case SHOW_NEW_TODO_FORM:
      return {
        ...state,
        isShowForm: true,
      };
    case HIDE_NEW_TODO_FORM:
      return {
        ...state,
        isShowForm: false,
      };
    case ADD_SHADOW_TODO:
      return {
        ...state,
        shadowTodos: state.shadowTodos.concat([action.todo]),
      };
    case REMOVE_SHADOW_TODO:
      return {
        ...state,
        shadowTodos: state.shadowTodos.filter(
          (todo) => todo.id !== action.todoId
        ),
      };
    default:
      return state;
  }
};

export const changeNewTodoTitle = (title) => ({
  type: CHANGE_NEW_TODO_TITLE,
  title,
});
export const cleanNewTodo = () => ({ type: ClEAN_NEW_TODO });
export const showNewTodoForm = () => ({ type: SHOW_NEW_TODO_FORM });
export const hideNewTodoForm = () => ({ type: HIDE_NEW_TODO_FORM });
export const addShadowTodo = (todo) => ({ type: ADD_SHADOW_TODO, todo });
export const removeShadowTodo = (todoId) => ({
  type: REMOVE_SHADOW_TODO,
  todoId,
});

// thunk

export const createTodo = (isOne) => async (dispatch, getState) => {
  const token = getState().user_auth.token;
  const userId = getState().user_auth.user.id;
  const newTodo = getState().todos_createTodo.newTodo;
  const tempId = Date.now();
  if (newTodo.title.trim()) {
    if (isOne) dispatch(hideNewTodoForm());
    dispatch(cleanNewTodo());
    dispatch(addShadowTodo({ id: tempId, ...newTodo }));
    let todo = await createTodayTodos(token, userId, newTodo);
    let todos = await getTodayTodos(token, userId);
    dispatch(setTodayList(todos));
    dispatch(removeShadowTodo(tempId));
  } else {
    dispatch(hideNewTodoForm());
    dispatch(cleanNewTodo());
  }
};

export default createTodosReducer;
