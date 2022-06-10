import axios from "axios";
import { setPostsAction } from "../store/postsReducer";

export const fetchPosts = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => dispatch(setPostsAction(data.data)));
  };
};
