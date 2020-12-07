const CHANGE_LOGIN_FIELD = "CHANGE-LOGIN-FIELD";
const CLEAN_LOGIN_FIELDS = "CLEAN-LOGIN-FIELDS";

const initialState = {
  fields: {
    email: "",
    password: "",
  },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD: {
      state.fields[action.fieldName] = action.fieldValue;
      return {
        ...state,
        fields: { ...state.fields },
      };
    }
    case CLEAN_LOGIN_FIELDS: {
      return {
        ...state,
        fields: {
          email: "",
          password: "",
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const changeLoginField = (fieldName, fieldValue = "") => ({
  type: CHANGE_LOGIN_FIELD,
  fieldName,
  fieldValue,
});

export const cleanLoginFields = () => ({ type: CLEAN_LOGIN_FIELDS });

export default loginReducer;
