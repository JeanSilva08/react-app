// src/App.js
import React from 'react';
import { useDispatch } from 'react-redux';
import useBusinessLogic from './businessLogic';
import { updateUserProfileAction } from './redux/actions/userActions';

function App() {
  const { generateDynamicForm, user, handleInputChange } = useBusinessLogic();
  const dynamicFormView = generateDynamicForm(false);
  const dynamicFormEdit = generateDynamicForm(true);

  const dispatch = useDispatch();

  const handleUpdateProfile = () => {
    // Assuming you have the user ID and want to update the profile data
    const userId = user.id; // Replace with your actual way of getting the user ID
    dispatch(updateUserProfileAction(userId, user));
  };

  return (
    <div className="App">
      <h1>Hello, {user.name || 'Guest'}!</h1>
      
      {dynamicFormView.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          <input type="text" value={user[field.name]} readOnly={true} />
        </div>
      ))}
      
      {dynamicFormEdit.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          <input
            type="text"
            value={user[field.name]}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
        </div>
      ))}
      
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
}

export default App;
