import React, { useMemo, useState } from "react";
import FormUpdateListUsers from "./components/FormUpdateListUsers";

import MyInput from "./components/MyInput";
import Select from "./components/select";
import TitleListUsers from "./components/TitleListUsers";
function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Vlad", spesials: "manager" },
    { id: 2, name: "Givi", spesials: "docktor" },
    { id: 3, name: "Ivan", spesials: "front-end" },
    { id: 4, name: "Jissel", spesials: "vokal" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedUsers = useMemo(() => {
    if (selectedSort) {
      return [...users].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return users;
  }, [selectedSort, users]);

  const sortedAndSearchUsers = useMemo(() => {
    return sortedUsers.filter((sortedUser) =>
      sortedUser.name.includes(searchQuery)
    );
  }, [searchQuery, sortedUsers]);

  const createUsers = (newUserInList) => {
    setUsers([...users, newUserInList]);
  };
  const removeUser = (user) => {
    setUsers(users.filter((us) => us.id !== user.id));
  };
  const sortUsers = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="container-lg">
      <div className="row">
        <FormUpdateListUsers create={createUsers} />
        <div>
          <MyInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control mt-3"
            placeholder="поиск"
          />
        </div>

        <Select
          value={selectedSort}
          onChange={sortUsers}
          options={[
            { value: "spesials", name: "по специальности" },
            { value: "name", name: "по имени" },
          ]}
        />
        {users.length ? (
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
