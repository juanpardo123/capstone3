import logo from './logo.svg';
import './App.css';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { createContext, useState } from 'react';
import { Profile } from './pages/Profile';
import { Task } from './pages/Task';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const UserContext = createContext();



function App() {

  const testUserInfo= 
  {
    id: 1,
    username: "MichaelTester",
    email: "michael@test.com"
  }
  
  const [userInfo, setUserInfo] = useState(testUserInfo);
  const [authenticated, setAuthenticated] = useState(true);
  const [userTasks, setUserTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState([]);
  
 

  if (authenticated) {
    return (
      <UserContext.Provider value={{ userInfo, authenticated, userTasks, currentTask, setUserTasks, setUserInfo, setAuthenticated, setCurrentTask }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/task" element={<Task></Task>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={{ userInfo, authenticated }}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Login></Login>}> </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    );
  }


}

export default App;
