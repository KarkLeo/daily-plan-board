const ROUTER_LOGIN = "ROUTER-LOGIN";
const ROUTER_REGISTER = "ROUTER-REGISTER";
const ROUTER_DASHBOARD = "ROUTER-DASHBOARD";
const ROUTER_SETTINGS = "ROUTER-SETTINGS";

const initialState = {
  screen: null,
};

const routerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROUTER_LOGIN:
      return {
        ...state,
        screen: "login",
      };
    case ROUTER_REGISTER:
      return {
        ...state,
        screen: "register",
      };
    case ROUTER_DASHBOARD:
      return {
        ...state,
        screen: "dashboard",
      };
    case ROUTER_SETTINGS: {
      return {
        ...state,
        screen: "settings",
      };
    }
    default:
      return state;
  }
};

export const routerLogin = () => ({ type: ROUTER_LOGIN });
export const routerRegister = () => ({ type: ROUTER_REGISTER });
export const routerDashboard = () => ({ type: ROUTER_DASHBOARD });
export const routerSettings = () => ({ type: ROUTER_SETTINGS });

export default routerReducer;
