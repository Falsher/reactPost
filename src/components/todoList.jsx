import React from 'react';
import { nanoid } from 'nanoid';
import MyButton from './myButton';
const TodoList = function ({ todoList, remove }) {
  return (
    <ul>
      {todoList.map(todo => (
        <li key={nanoid()}>
          <p>{todo.title}</p>
          {todo.body}
          <MyButton onClick={() => remove(todo)}>Delete</MyButton>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
