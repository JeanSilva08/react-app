// src/redux/actions/userActions.js

export const setUserPermissions = (permissions) => ({
  type: 'SET_USER_PERMISSIONS',
  payload: permissions,
});

export const updateUserProfile = (userData) => ({
  type: 'UPDATE_USER_PROFILE',
  payload: userData,
});
