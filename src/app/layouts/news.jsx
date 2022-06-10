import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../asyncActions/news";

const News = () => {
  const news = useSelector((state) => state.news.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  });
  if (news) {
    return (
      <div>
        <h1>News</h1>
        <ul>
          {news.map((item) => (
            <div key={item.id}>
              <h2>{item.id + " " + item.title}</h2>
              <p style={{ textTransform: "capitalize " }}>{item.body}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  } else return <h1>"Loading..."</h1>;
};

export default News;
