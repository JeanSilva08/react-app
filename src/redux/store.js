// src/redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Updated import path

const store = createStore(rootReducer);

export default store;
