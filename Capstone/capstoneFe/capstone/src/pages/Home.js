import React, { useEffect, useState, useContext } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

export const Home = () => {
  const { userInfo, authenticated, userTasks, setUserTasks, currentTask, setCurrentTask } = useContext(UserContext);

  const [completedTasks, setCompletedTasks] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);

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

  const sortTasksByCompletion = (tasks) => {
    const completed = tasks.filter(task => task.completed);
    const incomplete = tasks.filter(task => !task.completed);
    setCompletedTasks(completed);
    setIncompleteTasks(incomplete);
  };

  const handleTaskClick = (task) => {
    setCurrentTask(task);
    console.log(currentTask);
  };

  const testUserTasks = [
    {
      "id": 1,
      "userId": null,
      "name": "Clean the gutters",
      "description": "Make your own description here",
      "imageUrl": "null",
      "frequencyId": 1,
      "preferred": false,
      "completed": false,
      "steps": [
        {
          "id": 1,
          "sequence": 1,
          "name": "Grab a ladder",
          "description": "make a better one",
          "imageUrl": "link",
          "taskId": 1
        },
        {
          "id": 2,
          "sequence": 2,
          "name": "Grab some gloves",
          "description": "make a better one",
          "imageUrl": "link",
          "taskId": 1
        }
      ]
    },
    {
      "id": 2,
      "userId": null,
      "name": "Christmas decorations",
      "description": "Make your own description here2",
      "imageUrl": "null",
      "frequencyId": 1,
      "preferred": false,
      "completed": false,
      "steps": [
        {
          "id": 3,
          "sequence": 1,
          "name": "Get a tree",
          "description": "make a better one",
          "imageUrl": "link",
          "taskId": 2
        }
      ]
    },
    {
      "id": 3,
      "userId": null,
      "name": "Repot your flowers",
      "description": "Make your own description here3",
      "imageUrl": "null",
      "frequencyId": 1,
      "preferred": true,
      "completed": true,
      "steps": [
        {
          "id": 4,
          "sequence": 1,
          "name": "Buy new pots",
          "description": "make a better one",
          "imageUrl": "null",
          "taskId": 3
        }
      ]
    }
  ];

  const newUserTasks = [
    {
      "id": 4,
      "userId": null,
      "name": "Wash the car",
      "description": "Clean the exterior and interior of the car",
      "imageUrl": "https://example.com/car.jpg",
      "frequencyId": 2,
      "preferred": true,
      "completed": false,
      "steps": [
        {
          "id": 5,
          "sequence": 1,
          "name": "Gather cleaning supplies",
          "description": "Collect all necessary cleaning supplies",
          "imageUrl": "https://example.com/supplies.jpg",
          "taskId": 4
        },
        {
          "id": 6,
          "sequence": 2,
          "name": "Rinse the car",
          "description": "Rinse the car with water to remove loose dirt",
          "imageUrl": "https://example.com/rinse.jpg",
          "taskId": 4
        }
      ]
    },
    {
      "id": 5,
      "userId": null,
      "name": "Grocery shopping",
      "description": "Buy groceries for the week",
      "imageUrl": "https://example.com/groceries.jpg",
      "frequencyId": 1,
      "preferred": false,
      "completed": false,
      "steps": [
        {
          "id": 7,
          "sequence": 1,
          "name": "Make a shopping list",
          "description": "List all the items you need to buy",
          "imageUrl": "https://example.com/list.jpg",
          "taskId": 5
        },
        {
          "id": 8,
          "sequence": 2,
          "name": "Go to the store",
          "description": "Visit the grocery store to buy the items",
          "imageUrl": "https://example.com/store.jpg",
          "taskId": 5
        }
      ]
    },
    {
      "id": 6,
      "userId": null,
      "name": "Exercise",
      "description": "Complete a workout session",
      "imageUrl": "https://example.com/exercise.jpg",
      "frequencyId": 3,
      "preferred": true,
      "completed": true,
      "steps": [
        {
          "id": 9,
          "sequence": 1,
          "name": "Warm-up",
          "description": "Perform warm-up exercises",
          "imageUrl": "https://example.com/warmup.jpg",
          "taskId": 6
        },
        {
          "id": 10,
          "sequence": 2,
          "name": "Main workout",
          "description": "Complete the main workout routine",
          "imageUrl": "https://example.com/workout.jpg",
          "taskId": 6
        }
      ]
    }
  ];

  useEffect(() => {
    const getUserTasks = async () => {
      const data = await fetchData('tasks');
      if (data) {
        setUserTasks(data);
        sortTasksByCompletion(data);
      } else {
      }
    };

    getUserTasks();
  }, [setUserTasks]);

  return (
    <div>
      <Link to="/"> <h1>Home</h1></Link>
     
      {console.log(userTasks)}
      {console.log(incompleteTasks)}
      {console.log(completedTasks)}
      {authenticated && userInfo ? (
        <div>
          <p>Welcome, {userInfo.username}!</p>
          <p>Email: {userInfo.email}</p>
          <div className='taskHolder'>
            <h2>Pending Tasks</h2>
            {incompleteTasks.map((task) => (
              <Link className='link' to="/task">
              <div key={task.id} className='incomplete task' onClick={() => handleTaskClick(task)}>
                <div className='sideholder title'>
                <h2>{task.name}</h2>
                <h3>{task.season}</h3>
                </div>
              
                <div className='sideholder'>
                <img src={task.imageUrl} className='thumbnail' alt={task.name} />
                <p className='description'>{task.description}</p>
                
                </div>
                
              </div>
              </Link>
            ))}
            <h2>Completed Tasks</h2>
            {completedTasks.map((task) => (
              <div key={task.id} className='completed task'>
                <h2>{task.name}</h2>
                <p>{task.description}</p>
                <img src={task.imageUrl} alt={task.name} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No Tasks pending</p>
      )}
    </div>
  );
};