import React from "react";
const MyButton = ({ btn, ...props }) => {
  return (
    <div>
      <button {...props} className="btn btn-danger">
        {btn}
      </button>
    </div>
  );
};
export default MyButton;
