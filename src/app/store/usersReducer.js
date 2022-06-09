const defaultState = {
  login: "Admin",
  password: "12345",
  isAdmin: true,
};

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, login: action.payload };
    default:
      return state;
  }
};
