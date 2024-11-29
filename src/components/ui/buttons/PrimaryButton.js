import React from 'react';

const PrimaryButton = ({ type, children }) => {
  return (
    <button type={type} className="primary-button">
      {children}
    </button>
  );
};

export default PrimaryButton;
