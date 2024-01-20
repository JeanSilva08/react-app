// src/App.js
import React from 'react';
import useBusinessLogic from './businessLogic';

function App() {
  const { generateDynamicForm, user, handleInputChange } = useBusinessLogic();
  const dynamicFormView = generateDynamicForm(false); // For viewing, no editing allowed
  const dynamicFormEdit = generateDynamicForm(true); // For editing, show editable fields

  return (
    <div className="App">
      <h1>Hello, {user.name}!</h1>
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
      <button>Update Profile</button>
    </div>
  );
}

export default App;