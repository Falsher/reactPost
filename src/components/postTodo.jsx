import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Input from './input';
import MyButton from './myButton';
const PostTodo = ({ create }) => {
  const [title, setNameHero] = useState('');
  const [body, setWork] = useState('');
  function addNewPostTodo(event) {
    event.preventDefault();
    const newTodo = {
      id: nanoid(),
      title,
      body,
    };
    create(newTodo);
    setNameHero('');
    setWork('');
  }
  return (
    <form>
      <Input
        value={title}
        onChange={event => setNameHero(event.target.value)}
        type="text"
        placeholder="title"
      />
      <Input
        value={body}
        onChange={event => setWork(event.target.value)}
        type="text"
        placeholder="body"
      />
      <MyButton onClick={addNewPostTodo} type="submit">
        download post todo
      </MyButton>
    </form>
  );
};

export default PostTodo;
