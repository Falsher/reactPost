import React from "react";
import MyButton from "./MyButton";

const UserList = (props) => {
  return (
    <div className="container d-flex justify-content-around align-items-center border border-success mt-3">
      <div className="card-body">
        <h3 className="card-title">{props.user.title}</h3>
        <p className="card-subtitle mb-2 text-muted">body:</p>
        <p>{props.user.body}</p>
      </div>

      <div>
        <MyButton onClick={() => props.removeUser(props.user)} btn="Delete" />
      </div>
    </div>
  );
};
export default UserList;
