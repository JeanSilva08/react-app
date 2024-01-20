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
    await updateUser(userId, userData);
    dispatch(updateUserProfile(userData));
  } catch (error) {
    console.error('Error updating user profile:', error);
  }
};
