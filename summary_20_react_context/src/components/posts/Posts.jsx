import React from "react";
import classes from './Posts.module.css';
import PostCard from "./PostCard";

export default function Posts( {posts} ) {
  return (
    <div className={classes.postsContainer}>
      {
        posts.map(post => {
          return <PostCard key={post.id} postData={post} />
        })
      }
    </div>
  );
}