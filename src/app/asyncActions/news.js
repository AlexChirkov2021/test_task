import axios from "axios";
import { setNewsAction } from "../store/newsReducer";

export const fetchPosts = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => dispatch(setNewsAction(data.data)));
  };
};
