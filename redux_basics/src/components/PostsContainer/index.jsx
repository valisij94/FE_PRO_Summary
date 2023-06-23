import React from 'react'
import PostItem from '../PostItem';
import { useSelector } from 'react-redux';

export default function PostsContainer() {

  const posts = useSelector(state => state.posts);

  return (
    <div>
      {
        posts.map(el => <PostItem key={el.id} {...el} />)
      }
    </div>
  )
}
