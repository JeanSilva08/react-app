// src/components/UserProfileForm.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik';
import CustomInput from './CustomInput';

const UserProfileForm = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  // Permissions
  const canViewProfile = hasPermission('user:profile:view');
  const canEditProfile = hasPermission('user:profile:edit');
  const canEditName = hasPermission('user:profile:name:edit');

  return (
    <Formik initialValues={{ name: '', email: '' }} onSubmit={handleSubmit}>
      <Form>
        {/* Conditionally render fields based on permissions */}
        {canViewProfile && (
          <>
            <CustomInput
              label="Name"
              type="text"
              name="name"
              validate={canEditName ? validateName : undefined}
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
const validateName = (value) => {
  if (value.length > 30) {
    return 'Name must be 30 characters or less';
  }
};

const validateEmail = (value) => {
  // Add your email validation logic here
};

// Example of permission logic (replace with actual logic)
const hasPermission = (permission) => {
  const userPermissions = ['user:profile:view', 'user:profile:edit', 'user:profile:name:edit'];
  return userPermissions.includes(permission);
};

export default UserProfileForm;
