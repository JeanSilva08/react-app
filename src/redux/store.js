import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const initialState = {
  user: {
    permissions: [], // Permissions array
    userData: {
      username: '', // User's username
      email: '',    // User's email
      // Add more fields as needed
    },
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
