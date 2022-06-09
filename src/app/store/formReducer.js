const defaultState = {
  login: "",
  password: "",
};

const SET_LOGIN = "SET_LOGIN";
const SET_PASSWORD = "SET_PASSWORD";

export const formReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, login: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
