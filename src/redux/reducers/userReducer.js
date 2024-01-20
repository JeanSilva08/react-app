// src/redux/reducers/userReducer.js
const initialState = {
  // Define initial user state if needed
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_PROFILE':
      // Handle the user profile update in your state
      // For now, just return the new user data
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
