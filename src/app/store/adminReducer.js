const defaultState = {
  admin: false,
};

const SET_ADMIN = "SET_ADMIN";

export const adminReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ADMIN:
      return { ...state, admin: action.payload };
    default:
      return state;
  }
};
