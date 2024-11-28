import React from 'react';

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="login-form-field">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} required />
    </div>
  );
};

export default InputField;
