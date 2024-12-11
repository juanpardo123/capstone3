import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import { UserContext, userTasks } from '../App';

export const Profile = () => {
    const {  userInfo, authenticated, userTasks, setUserInfo, setUserTasks } = useContext(UserContext);

    const fetchData = async (endpoint) => {
      try {
        const response = await fetch(`http://localhost:8080/${endpoint}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    };


    useEffect(() => {
      const getUserTasks = async () => {
        const data = await fetchData('tasks');
        if (data) {
          setUserTasks(data);
        }
      };
  
      getUserTasks();
    }, [setUserTasks]);
  

  return (
    <div>
    <h1>Home</h1>
    {console.log(userTasks)}
    {userTasks ? (
      <div>
        <p>Welcome, {userInfo.username}!</p>
        <p>Email: {userInfo.email}</p>
        
      </div>
    ) : (
      <p>No Tasks pending</p>
    )}
  </div>
  )
}
