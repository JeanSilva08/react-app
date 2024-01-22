// src/redux/actions/userActions.js
import { getAllUsers, updateUser } from '../../services/userService';

// Action types
export const SET_USER_PERMISSIONS = 'SET_USER_PERMISSIONS';
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';

// Action creators
export const setUserPermissions = (permissions) => ({
  type: SET_USER_PERMISSIONS,
  payload: permissions,
});

export const updateUserProfile = (userData) => ({
  type: UPDATE_USER_PROFILE,
  payload: userData,
});

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const users = await getAllUsers();
    dispatch(setUserPermissions(users.permissions));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const updateUserProfileAction = (userId, userData) => async (dispatch) => {
  try {
    const response = await updateUser(userId, userData);

    // Log the full response for debugging purposes
    console.log('Update User Response:', response);

    // Check if the update was successful based on the response status
    if (response.status === 200) {
      const updatedUser = await response.json();
      dispatch(updateUserProfile(updatedUser));
    } else {
      console.error('Error updating user profile:', response.statusText);
    }
  } catch (error) {
    console.error('Error updating user profile:', error);
  }
};
