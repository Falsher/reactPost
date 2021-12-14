import React, { useMemo, useState } from "react";
import FormUpdateListUsers from "./components/FormUpdateListUsers";

import PostFilter from "./components/PostFilter";

import TitleListUsers from "./components/TitleListUsers";
function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Vlad", spesials: "manager" },
    { id: 2, name: "Givi", spesials: "docktor" },
    { id: 3, name: "Ivan", spesials: "front-end" },
    { id: 4, name: "Jissel", spesials: "vokal" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedUsers = useMemo(() => {
    if (filter.sort) {
      return [...users].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return users;
  }, [filter.sort, users]);

  const sortedAndSearchUsers = useMemo(() => {
    return sortedUsers.filter((sortedUser) =>
      sortedUser.name.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedUsers]);

  const createUsers = (newUserInList) => {
    setUsers([...users, newUserInList]);
  };
  const removeUser = (user) => {
    setUsers(users.filter((us) => us.id !== user.id));
  };

  return (
    <div className="container-lg">
      <div className="row">
        <FormUpdateListUsers create={createUsers} />
        <PostFilter filter={filter} setFilter={setFilter} />
        {sortedAndSearchUsers.length ? (
          <TitleListUsers
            removeUser={removeUser}
            users={sortedAndSearchUsers}
            title="List Users"
          />
        ) : (
          <div>
            <h2>No Users</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
