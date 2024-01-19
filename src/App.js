// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from './services/userService';
import UserProfileForm from './components/UserProfileForm';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getAllUsers();
        // For simplicity, assuming the first user is the logged-in user
        dispatch({ type: 'SET_USER', payload: users[0] });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>User Profile</h1>
      {user ? (
        <UserProfileForm readOnly={!user.permissions.includes('user:profile:edit')} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
