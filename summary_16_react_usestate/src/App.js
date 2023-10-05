import { useState } from 'react';
import './App.css';
import LoginForm from './components/loginForm/LoginForm';

function App() {

  // создать локальный стейт, в котором будет значение нашего инпута inputValue, setInputValue

  const [inputValue, setInputValue] = useState('');

  return (
      <div className="App">
        <LoginForm />
      </div>
  );
}

export default App;
