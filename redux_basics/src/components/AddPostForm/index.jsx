import React, { useContext } from 'react'
import { Context } from '../../context';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/reducers/postsReducer';
import { hideModal, showModal } from '../../store/reducers/modalReducer';

export default function AddPostForm() {

  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    const { title, description } = e.target;
    const post = {
      id:  Date.now(),
      title: title.value,
      description: description.value,
      like: false,
      comments: []
    }
    dispatch( addPost(post) );

    dispatch (showModal() );
    setTimeout( () => {
      dispatch(hideModal())
    }, 2000);

    e.target.reset()
  }

  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='Title' name='title' />
      <input type='text' placeholder='Description' name='description' />
      <button>Add post</button>
    </form>
  )
}
