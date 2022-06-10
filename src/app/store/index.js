import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./usersReducer";
import { adminReducer } from "./adminReducer";
import { formReducer } from "./formReducer";
import { postsReducer } from "./postsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  admin: adminReducer,
  form: formReducer,
  users: usersReducer,
  posts: postsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
