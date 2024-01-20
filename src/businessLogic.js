// src/businessLogic.js
import { useState } from 'react';

const useBusinessLogic = () => {
  const [user, setUser] = useState({ name: 'John Doe', email: 'john.doe@example.com' }); // Add other fields as needed

  const generateDynamicForm = () => {
    // Logic to generate a dynamic form based on user permissions
    // Modify this logic based on your specific requirements.
    const userPermissions = ['user:profile:view', 'user:profile:edit'];

    // Define your form fields with initial visibility set to false
    let dynamicForm = [
      { label: 'View Profile', name: 'profile', type: 'readonly', visible: false },
      { label: 'Edit Profile', name: 'profile', type: 'editable', visible: false },
      // Add other fields as needed
    ];

    // Set visibility based on user permissions
    if (userPermissions.includes('user:profile:view')) {
      dynamicForm.find((field) => field.type === 'readonly').visible = true;
    }

    if (userPermissions.includes('user:profile:edit')) {
      dynamicForm.find((field) => field.type === 'editable').visible = true;
    }

    return dynamicForm.filter((field) => field.visible);
  };

  const handleInputChange = (fieldName, value) => {
    setUser((prevUser) => ({ ...prevUser, [fieldName]: value }));
  };

  return { generateDynamicForm, user, handleInputChange };
};

export default useBusinessLogic;
