import { useState } from 'react';
import './App.css';
import PostsContainer from './components/PostsContainer';
import { posts_data } from './data/posts_data';
import { Context } from './context';
import AddPostForm from './components/AddPostForm';
import ModalComponent from './components/ModalComponent';

function App() {
  return (
    <div>
        <AddPostForm />
        <PostsContainer />
        <ModalComponent text="Welcome" />
    </div>
  );
}

export default App;
