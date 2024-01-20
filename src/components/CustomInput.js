// src/components/CustomInput.js
import React from 'react';

const CustomInput = ({ label, value, onChange, maxLength, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default CustomInput;
