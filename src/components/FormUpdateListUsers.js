import React, { useState } from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
const FormUpdateListUsers = ({ create }) => {
  const [newUser, setNewUser] = useState({ title: "", body: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserInList = {
      ...newUser,
      id: Date.now(),
    };
    create(newUserInList);
    setNewUser({ title: "", body: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">title</label>
        <MyInput
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, title: e.target.value })}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">body</label>
        <MyInput
          value={newUser.spesials}
          onChange={(e) => setNewUser({ ...newUser, body: e.target.value })}
          type="text"
          className="form-control"
        />
      </div>

      <MyButton type="submit" btn="Добавить" />
    </form>
  );
};
export default FormUpdateListUsers;
