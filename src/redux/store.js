// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const initialState = {
  user: {
    permissions: [], // Add user permissions array
    userData: {
      username: '',
      email: '',
      // Add more fields as needed
    },
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
