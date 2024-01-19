// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Updated import path

const rootReducer = combineReducers({
  user: userReducer,
  
});

export default rootReducer;