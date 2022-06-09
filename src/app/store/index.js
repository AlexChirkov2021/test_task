import { createStore, combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { adminReducer } from "./adminReducer";
import { showPasswordReducer } from "./showPasswordReducer";
import { formReducer } from "./formReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  admin: adminReducer,
  form: formReducer,
  users: usersReducer,
  showPassword: showPasswordReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
