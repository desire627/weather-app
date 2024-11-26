import React from 'react';

function ErrorMessage({ message }) {
  if (!message) return null;

  return <div style={{ color: 'red' }}>{message}</div>;
}

export default ErrorMessage;
