import React from 'react';

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem = ({ id, title, completed }: TodoItemProps) => {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>&times;</span>
    </li>
  );
};

export default TodoItem;
