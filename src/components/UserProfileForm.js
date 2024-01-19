// src/components/UserProfileForm.js
import React from 'react';
import { updateUserProfile } from '../redux/actions/userActions';
import { updateUser } from '../../redux/actions/userActions'; // Adjusted import path

const UserProfileForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUpdateUser = () => {
    // Dispatch the updateUser action with the updated user data
    dispatch(updateUser({ id: user.id, username: 'newUsername', email: 'newEmail@example.com' }));
  };

  return (
    <div>
      <h2>User Profile Form</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
};

export default UserProfileForm;
