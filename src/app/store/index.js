import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./usersReducer";
import { adminReducer } from "./adminReducer";
import { formReducer } from "./formReducer";
import { newsReducer } from "./newsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  admin: adminReducer,
  form: formReducer,
  users: usersReducer,
  news: newsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
