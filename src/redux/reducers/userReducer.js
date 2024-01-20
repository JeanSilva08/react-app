// src/redux/reducers/userReducer.js

const userReducer = (state = { permissions: [] }, action) => {
  switch (action.type) {
    case 'SET_USER_PERMISSIONS':
      return { ...state, permissions: action.payload };
    default:
      return state;
  }
};

export default userReducer;
