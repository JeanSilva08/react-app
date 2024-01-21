// src/businessLogic.js
import { useState, useEffect } from 'react';

const useBusinessLogic = (BASE_URL) => {
  const [user, setUser] = useState({ name: 'Guest' }); // Provide a default name
  const [userPermissions, setUserPermissions] = useState([]);
  const [error, setError] = useState(null);

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
        setUser(userData);

        if (userData.id) {
          const permissionsResponse = await fetch(`${BASE_URL}/api/user/permissions/${userData.id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Basic ${btoa('testuser:testpassword')}`,
            },
          });

          if (!permissionsResponse.ok) {
            throw new Error(`HTTP error! Status: ${permissionsResponse.status}`);
          }

          const permissionsData = await permissionsResponse.json();
          setUserPermissions(permissionsData.permissions);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, [BASE_URL]);

  const generateDynamicForm = (canEdit) => {
    let dynamicForm = [];

    if (userPermissions.includes('user:profile:view')) {
      dynamicForm.push({ label: 'View Profile', name: 'profile', type: 'readonly' });
    }

    if (canEdit && userPermissions.includes('user:profile:edit')) {
      dynamicForm.push({ label: 'Edit Profile', name: 'profile', type: 'editable' });
    }

    return dynamicForm;
  };

  const handleInputChange = (fieldName, value) => {
    setUser((prevUser) => ({ ...prevUser, [fieldName]: value }));
  };

  return { generateDynamicForm, user, handleInputChange, error };
};

export default useBusinessLogic;
