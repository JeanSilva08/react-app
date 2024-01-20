import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllUsers, updateUserProfileAction } from './redux/actions/userActions';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleUpdateProfile = () => {
    // Dispatch the action to update the user profile
    dispatch(updateUserProfileAction(/* pass necessary parameters */));
  };

  return (
    <div className="App">
      <h1>Hello, {user.name}!</h1>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
}

export default App;
