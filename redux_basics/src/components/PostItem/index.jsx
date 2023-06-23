import React from 'react'
import s from './index.module.css'
import CommentsContainer from '../CommentsContainer';
import { useDispatch } from 'react-redux';
import { changeLike, deletePost } from '../../store/reducers/postsReducer';

export default function PostItem({ id, title, description, like, comments }) {


  const dispatch = useDispatch();

  const like_text = like ? 'Liked' : 'Like?';

  const btn_styles = {
    color: like ? 'white' : 'black',
    backgroundColor: like ? 'darkblue' : 'azure'
  }

  return (
    <div className={s.post_item}>
      <span onClick={ () => dispatch( deletePost(id) ) }>X</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div
        className={s.like_btn}
        style={btn_styles}
        onClick={() => dispatch( changeLike(id) ) }
      >
        {like_text}
      </div>
      <CommentsContainer comments={comments} post_id={id} />
    </div>
  )
}
