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
    
    const userId = user.id; 
    if (userId) {
      dispatch(updateUserProfileAction(userId, user));
    } else {
      console.error('User ID is undefined');
    }
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
