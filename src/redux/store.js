// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Include additional user data in initialState
const initialState = {
  user: {
    permissions: [], // Permissions array
    userData: {
      name: '',    // User's name
      email: '',   // User's email
      // Add more fields as needed
    },
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
