import React from "react";
import classes from './Posts.module.css';
import { Link } from "react-router-dom";

export default function PostCard( {postData} ) {
  return (
    <Link to={`/post/${postData.id}`}>
      <div
        className={classes.postCard}
      >
        <h3>{postData.title}</h3>
        <p>{postData.body}</p>
      </div>
    </Link>
  );
}