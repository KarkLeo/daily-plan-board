import { changeDaysInDate } from "../../methods/date";

const SET_TODOS_SELECTION_DATE = "SET-TODOS-SELECTION-DATE";

const initialState = {
  date: new Date(),
};

const todosSelectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS_SELECTION_DATE:
      return {
        ...state,
        date: action.date,
      };
    default:
      return state;
  }
};

export const setTodosSelectionDate = (date) => ({
  type: SET_TODOS_SELECTION_DATE,
  date,
});

export const prevDay = () => (dispatch, getState) => {
  const currentDate = getState().todos_selection.date;
  dispatch(setTodosSelectionDate(changeDaysInDate(currentDate, -1)));
};
export const nextDay = () => (dispatch, getState) => {
  const currentDate = getState().todos_selection.date;
  dispatch(setTodosSelectionDate(changeDaysInDate(currentDate, 1)));
};

export default todosSelectionReducer;
