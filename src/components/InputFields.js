import React from 'react';

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="form-field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        className="input-field"  // Classe adicional para controle de estilo
      />
    </div>
  );
};

export default InputField;
