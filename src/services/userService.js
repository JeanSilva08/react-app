// src/services/userService.js
const BASE_URL = 'http://localhost:3000/api';

export const getAllUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('testuser:testpassword')}`, // Replace with your actual credentials
    },
  });
  return response.json();
};

export const createUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('testuser:testpassword')}`, // Replace with your actual credentials
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const updateUser = async (userId, userData) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('testuser:testpassword')}`, // Replace with your actual credentials
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};
