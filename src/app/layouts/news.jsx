import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../asyncActions/posts";

const News = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  });
  if (posts) {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.id + " " + post.title}</h2>
              <p style={{ textTransform: "capitalize " }}>{post.body}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  } else return <h1>"Loading..."</h1>;
};

export default News;
