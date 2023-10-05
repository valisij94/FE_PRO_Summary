import { useState } from 'react';
import './App.css';
import LoginForm from './components/loginForm/LoginForm';

function App() {

  const [isLoginFormShown, setIsLoginFormShown] = useState(false);

  const toggleLoginFormVisibility = () => {
    setIsLoginFormShown(old => !old);
  }

  return (
      <div className="App">
        <h3>Кнопка управления видимостью формы входа, и блока с попытками. Нажимайте для показа/скрытия блока формы авторизации</h3>
        <button className="button" onClick={toggleLoginFormVisibility}>
          {`${isLoginFormShown ? 'Hide' : 'Show'} login form`}
        </button>
        {
          isLoginFormShown && <LoginForm />
        }
      </div>
  );
}

export default App;
