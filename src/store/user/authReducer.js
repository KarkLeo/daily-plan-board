import { testToken } from "../../api/user";
import { routerUncompleted, routerLogin } from "../routerReducer";
import { loginUser } from "../../api/user";
import { registerUser } from "../../api/user";
import { cleanLoginFields } from "./loginReducer";
import { cleanRegisterFields } from "./registerReducer";

const SET_AUTH = "SET-AUTH";
const CLEAN_AUTH = "CLEAN-AUTH";

const initialState = {
  token: null,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        token: action.token,
        user: action.user,
      };
    case CLEAN_AUTH:
      return {
        ...state,
        token: null,
        user: {},
      };
    default:
      return state;
  }
};

export const setAuth = (token, user) => ({ type: SET_AUTH, token, user });
export const cleanAuth = () => ({ type: CLEAN_AUTH });

// thunk
export const testLocalToken = () => async (dispatch) => {
  let token = window?.localStorage?.getItem("token");
  if (token !== null) {
    let user = await testToken(window?.localStorage?.getItem("token"));

    if (user.id) {
      dispatch(setAuth(token, user));
      dispatch(routerUncompleted());
    } else {
      window?.localStorage?.removeItem("token");
      dispatch(routerLogin());
    }
  } else {
    dispatch(routerLogin());
  }
};

export const registration = () => async (dispatch, setState) => {
  let fields = setState().user_register.fields;
  let auth = await registerUser(fields.fullName, fields.email, fields.password);

  if (auth.token) {
    dispatch(setAuth(auth.token, auth.user));
    window?.localStorage?.setItem("token", auth.token);
    dispatch(routerUncompleted());
    dispatch(cleanRegisterFields());
  } else {
    console.error("Aut not is die");
    console.error(auth);
    dispatch(cleanRegisterFields());
  }
};

export const logIn = () => async (dispatch, getState) => {
  let fields = getState().user_login.fields;
  let auth = await loginUser(fields.email, fields.password);

  if (auth.token) {
    dispatch(setAuth(auth.token, auth.user));
    window?.localStorage?.setItem("token", auth.token);
    dispatch(routerUncompleted());
    dispatch(cleanLoginFields());
  } else {
    console.error("Aut not is die");
    console.error(auth);
    dispatch(cleanLoginFields());
  }
};

export const logOut = () => (dispatch) => {
  dispatch(cleanAuth());
  window?.localStorage?.removeItem("token");
  dispatch(routerLogin());
};

export default authReducer;
