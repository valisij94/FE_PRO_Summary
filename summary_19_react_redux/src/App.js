import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Register from './pages/registrer/Register';
import { Routes, Route, Link } from 'react-router-dom';
import Feed from './pages/feed/Feed';
import NewPost from './pages/newPost/NewPost';
import { useDispatch } from 'react-redux';
import Button from './components/button/Button';
import { changeThemeAction } from './redux/theme/themeActions';

function App() {

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch( changeThemeAction() )
  }

  return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/feed">Feed</Link></li>
          </ul>
          <Button text="Change theme" onClick={clickHandler} />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post/:postId" element={<NewPost />} />
        </Routes>
      </div>
  );
}

export default App;
