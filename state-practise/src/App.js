import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import { useState } from 'react';

function App() {

  const [login,setLogin] = useState(false);

  const loginHandler = () => {
    setLogin(true);
  }

  const logoutHandler = () => {
    setLogin(false);
  }

  return (
    <>
    <div>
    <Welcome title="You are signed in as" onlogout={logoutHandler} onLogin={loginHandler} user={login}/>
    </div>
    </>
  );
}

export default App;
