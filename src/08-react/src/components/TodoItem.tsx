import React from 'react';

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  style?: React.CSSProperties;
}

const TodoItem = ({ id, title, completed, style = {} }: TodoItemProps) => {
  return (
    <li
      style={{
        color: 'red',
        backgroundColor: 'white',
        ...style,
      }}
    >
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>&times;</span>
    </li>
  );
};

export default TodoItem;
