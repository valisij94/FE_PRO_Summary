import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function NewPost() {

  const params = useParams();

  const [postData, setPostData] = useState({})

  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then( resp => resp.json())
      .then( res => setPostData(res));
  }, []);

  return (
    <div>
      <h3>{postData.title}</h3>
      <p>{postData.body}</p>
    </div>
  );
}

export default NewPost;