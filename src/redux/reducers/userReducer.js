// src/redux/reducers/userReducer.js
const initialState = {
    user: null,
    permissions: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'SET_PERMISSIONS':
        return { ...state, permissions: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  