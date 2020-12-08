import { getUsers } from "../../api/users";
import { fetchUsersTodos } from "./usersTodosReducer";

const SET_USERS = "SET-USERS";

const initialState = {
  users: [],
};

const usersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export const setUsers = (users) => ({ type: SET_USERS, users });

// thunk

export const fetchUsers = () => async (dispatch, getState) => {
  const token = getState().user_auth.token;
  const userId = getState().user_auth.user.id;
  let users = await getUsers(token);
  dispatch(
    setUsers(
      Array.isArray(users)
        ? users
            .filter((user) => user.id !== userId)
            .map((user) => ({
              id: user.id,
              username: user.username,
              email: user.email,
            }))
        : []
    )
  );
  dispatch(fetchUsersTodos());
};

export default usersListReducer;
