import React from 'react';
const MyButton = function ({ children, ...props }) {
  return (
    <button {...props} type="submit">
      {children}
    </button>
  );
};
export default MyButton;
