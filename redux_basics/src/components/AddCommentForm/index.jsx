import React from 'react'
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/reducers/postsReducer';

export default function AddCommentForm({ post_id }) {

  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    const { comment } = e.target;
    const comment_obj = {
      id: Date.now(),
      comment: comment.value
    }
    dispatch(addComment(post_id, comment_obj));
    e.target.reset()
  }

  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='Your comment' name='comment' />
      <button>Add comment</button>
    </form>
  )
}
