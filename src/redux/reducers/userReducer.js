const initialState = { permissions: [], userData: { username: '', email: '' } };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_PERMISSIONS':
      return { ...state, permissions: action.payload };
    case 'UPDATE_USER_PROFILE':
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default userReducer;
