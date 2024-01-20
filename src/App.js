// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from './redux/actions/userActions';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleUpdateProfile = () => {
    // Dispatch the action to update the user profile
    dispatch(updateUserProfile(/* pass necessary parameters */));
  };

  return (
    <div className="App">
      <h1>Hello, {user.name}!</h1>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
}

export default App;
