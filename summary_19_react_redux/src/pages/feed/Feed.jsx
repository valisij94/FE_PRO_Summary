import React, { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import {useSelector, useDispatch} from 'react-redux';
import { asyncPostsAction, responseReceivedAction } from "../../redux/posts/postsAction";

function Feed() {

  const postsState = useSelector( state => state.posts );
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( asyncPostsAction() );
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then( resp => resp.json() )
    //   .then( res => dispatch(responseReceivedAction(res)) );
  }, [])

  return (
    <Posts posts={postsState.posts} />
  );
}

export default Feed;