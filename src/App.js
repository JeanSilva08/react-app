// src/App.js
import React from 'react';
import useBusinessLogic from './businessLogic';

function App() {
  const { generateDynamicForm, user, handleInputChange } = useBusinessLogic();
  const dynamicForm = generateDynamicForm();

  return (
    <div className="App">
      <h1>Hello, {user.name}!</h1>
      {/* Render other static content here */}
      {dynamicForm.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          {field.type === 'readonly' ? (
            <input
              type="text"
              value={user[field.name]}
              readOnly={true}
            />
          ) : (
            <input
              type="text"
              value={user[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
      <button>Update Profile</button>
    </div>
  );
}

export default App;
