import React, { useState } from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
const FormUpdateListUsers = ({ create }) => {
  const [newUser, setNewUser] = useState({ name: "", spesials: "" });
  //   const [spesialInput, setSpesialInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserInList = {
      ...newUser,
      id: Date.now(),
    };
    create(newUserInList);
    setNewUser({ name: "", spesials: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <MyInput
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Spesials</label>
        <MyInput
          value={newUser.spesials}
          onChange={(e) => setNewUser({ ...newUser, spesials: e.target.value })}
          type="text"
          className="form-control"
        />
      </div>

      <MyButton type="submit" btn="Добавить" />
    </form>
  );
};
export default FormUpdateListUsers;
