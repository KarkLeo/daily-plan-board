const CHANGE_REGISTER_FIELD = "CHANGE-REGISTER-FIELD";
const CLEAN_REGISTER_FIELDS = "CLEAN-REGISTER-FIELDS";

const initialState = {
  fields: {
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
  },
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_REGISTER_FIELD: {
      state.fields[action.fieldName] = action.fieldValue;
      return {
        ...state,
        fields: { ...state.fields },
      };
    }
    case CLEAN_REGISTER_FIELDS: {
      return {
        ...state,
        fields: {
          fullName: "",
          email: "",
          password: "",
          repeatPassword: "",
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const changeRegisterField = (fieldName, fieldValue = "") => ({
  type: CHANGE_REGISTER_FIELD,
  fieldName,
  fieldValue,
});

export const cleanRegisterFields = () => ({ type: CLEAN_REGISTER_FIELDS });

export default registerReducer;
