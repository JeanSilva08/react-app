// src/businessLogic.js
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsers } from './services/userService';
import { setUserPermissions } from './redux/actions/userActions';

const useBusinessLogic = (BASE_URL) => {
  const [user, setUser] = useState({ name: 'Guest' });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/users`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa('testuser:testpassword')}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();

        // Ensure that the user object has an 'id' field
        if ('id' in userData) {
          setUser(userData);

          // Store user ID in Redux state
          dispatch(setUserPermissions({ ...userData, id: userData.id }));

          // Fetch and set user permissions if needed
          if (userData.id) {
            // ... Fetch user permissions logic
          }
        } else {
          console.error('User ID is missing in the response');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, [BASE_URL, dispatch]);

  const generateDynamicForm = (canEdit) => {
    let dynamicForm = [];

    // ... Existing code for generating dynamic form

    return dynamicForm;
  };

  const handleInputChange = (fieldName, value) => {
    setUser((prevUser) => ({ ...prevUser, [fieldName]: value }));
  };

  return { generateDynamicForm, user, handleInputChange, error };
};

export default useBusinessLogic;
