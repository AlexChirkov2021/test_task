import React, { useState, useEffect } from "react";
import axios from "axios";
const News = () => {
  const [posts, setPosts] = useState();
  const getPosts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  if (posts) {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.id + " " + post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  } else return <h1>"Loading..."</h1>;
};

export default News;
