// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Update the path based on your project structure

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers as needed
});

export default rootReducer;
