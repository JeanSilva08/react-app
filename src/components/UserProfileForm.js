// src/components/UserProfileForm.js
import React, { useState } from 'react';
import CustomInput from './CustomInput';

const UserProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    // Handle name change logic
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    // Handle email change logic
    setEmail(e.target.value);
  };

  // Add more fields and validation logic as needed

  return (
    <form>
      <CustomInput
        label="Name"
        value={name}
        onChange={handleNameChange}
        maxLength={50} // Example: Set maximum length
        // Add more props for validation and error handling
      />

      <CustomInput
        label="Email"
        value={email}
        onChange={handleEmailChange}
        maxLength={100} // Example: Set maximum length
        // Add more props for validation and error handling
      />

      {/* Add more CustomInput components for additional fields */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserProfileForm;
