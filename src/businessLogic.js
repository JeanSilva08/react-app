import { useState, useEffect } from 'react';

const useBusinessLogic = () => {
  const [user, setUser] = useState({ name: '' }); // Initialize with default values
  const [userPermissions, setUserPermissions] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic dGVzdHVzZXI6dGVzdHBhc3N3b3Jk', // Replace with your actual credentials
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);

          const permissionsResponse = await fetch(`/api/user/permissions/${userData.id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic dGVzdHVzZXI6dGVzdHBhc3N3b3Jk', // Replace with your actual credentials
            },
          });

          if (permissionsResponse.ok) {
            const permissionsData = await permissionsResponse.json();
            setUserPermissions(permissionsData.permissions);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

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

  return { generateDynamicForm, user, handleInputChange };
};

export default useBusinessLogic;
