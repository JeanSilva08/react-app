// src/components/UserProfileForm.js

import React from 'react';
import { Formik, Form, useFormikContext } from 'formik';
import CustomInput from './CustomInput';
import { updateUser } from '../services/userService';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../redux/actions/userActions';

const UserProfileForm = () => {
  const dispatch = useDispatch();
  const { values, setFieldValue } = useFormikContext();
  const user = useSelector((state) => state.user);

  const canEditProfile = hasPermission('user:profile:edit');

  const handleSubmit = async (values) => {
    // Only submit the form if the user has the 'user:profile:edit' permission
    if (canEditProfile) {
      // Call the backend API to update the user
      try {
        const updatedUser = await updateUser(values);

        // Update the user profile in the Redux store
        dispatch(updateUserProfile(updatedUser));

        // Add any additional logic after successful submission
        console.log('Form submitted successfully!');
      } catch (error) {
        // Handle API error
        console.error('Error submitting form:', error);
      }
    }
  };

  // Permissions
  const canViewProfile = hasPermission('user:profile:view');
  const canEditName = hasPermission('user:profile:name:edit');

  return (
    <Formik initialValues={{ username: '', email: '' }} onSubmit={handleSubmit}>
      <Form>
        {/* Conditionally render fields based on permissions */}
        {canViewProfile && (
          <>
            <CustomInput
              label="Username"
              type="text"
              name="username"
              validate={canEditName ? validateUsername : undefined}
              readOnly={!canEditName}
            />
            {canEditProfile && (
              <CustomInput
                label="Email"
                type="email"
                name="email"
                validate={validateEmail}
                readOnly={!canEditProfile}
              />
            )}
            {/* Add more custom form elements as needed */}
            <button type="submit">Submit</button>
          </>
        )}
      </Form>
    </Formik>
  );
};

// Example of custom validation (replace with actual validation logic)
const validateUsername = (value) => {
  if (value.length > 30) {
    return 'Username must be 30 characters or less';
  }
};

const validateEmail = (value) => {
  // Add your email validation logic here
};

// Example of permission logic (replace with actual logic)
const hasPermission = (permission) => {
  const userPermissions = user.permissions; // Assuming user permissions are stored in Redux
  return userPermissions.includes(permission);
};

export default UserProfileForm;
