import React from 'react'
import { useState } from 'react';
import '../styles/Login.css';
import { UserContext} from '../App';
import { useContext } from 'react';

export const Login = () => {

  const { setAuthenticated, setUserInfo } = useContext(UserContext);

    const [usernameText, setUsernameText] = useState("");
    const [passwordText, setPasswordText] = useState("");
    const [testText, setTestText] = useState("blank");

    const testUserInfo= 
  {
    id: 1,
    username: "MichaelTester",
    email: "michael@test.com"
  }

    function handleLogin(){
        setAuthenticated(true);
        setUserInfo(testUserInfo);
    }

    const usernameTextChange = (event) => {
        setUsernameText(event.target.value);
      };
    const passwordTextChange = (event) => {
        setPasswordText(event.target.value);
      };

  return (
  <>
  <div className='backdrop'>

  
    <div className='login-holder'>
    <h1>Login</h1>   
      <input 
             type="text" 
             value={usernameText} 
             onChange={usernameTextChange} 
             placeholder="Enter text 1" />
        <input 
             type="Password" 
             value={passwordText} 
             onChange={passwordTextChange} 
             placeholder="Enter text 1" />
    <button onClick={handleLogin}>Log in</button>
    </div>
    </div>
  </>
  )
}
