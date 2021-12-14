import React from "react";
import UserList from "./UserList";
const TitleListUsers = ({ users, title, removeUser }) => {
  return (
    <div>
      <h1 className="text-center">{title}</h1>
      {users.map((user) => (
        <UserList removeUser={removeUser} user={user} key={user.id} />
      ))}
    </div>
  );
};
export default TitleListUsers;
