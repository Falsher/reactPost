import React from "react";
import "../App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import UserList from "./UserList";
const TitleListUsers = ({ posts, title, removeUser }) => {
  return (
    <div>
      <h1 className="text-center">{title}</h1>
      <TransitionGroup>
        {posts.map((user) => (
          <CSSTransition key={user.id} timeout={500} classNames="post">
            <UserList removeUser={removeUser} user={user} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default TitleListUsers;
