import React, { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then( resp => resp.json() )
      .then( res => setPosts(res));
  }, [])

  return (
    <Posts posts={posts} />
  );
}

export default Feed;