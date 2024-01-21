// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Update the path based on your project structure
const initialState = {
  user: {
    permissions: [],
    userData: {
      id: '', // Add an 'id' field to store the user ID
      username: '',
      email: '',
    },
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
