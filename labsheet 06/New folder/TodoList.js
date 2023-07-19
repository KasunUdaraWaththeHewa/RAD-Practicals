import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export const todos = [
  'Learn React',
  'Build a project',
  'Go for a walk',
  'Do some exercises',
  'Join a music class',
  'Read a novel'
];

export default TodoList;
