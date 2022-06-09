const defaultState = {
  showPassword: false,
};

const SET_SHOW_PASSWORD = "SET_SHOW_PASSWORD";

export const showPasswordReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SHOW_PASSWORD:
      return { ...state, showPassword: action.payload };
    default:
      return state;
  }
};
