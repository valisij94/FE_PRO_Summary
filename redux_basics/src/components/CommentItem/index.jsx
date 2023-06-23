import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../store/reducers/postsReducer';

export default function CommentItem({ id, comment, post_id }) {

  const dispatch = useDispatch();

  return (
    <div
      className={s.comment_item}
      onClick={() => dispatch(deleteComment(post_id, id)) }
    >
      { comment }
    </div>
  )
}
