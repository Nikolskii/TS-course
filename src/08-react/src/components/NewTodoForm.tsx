import React, { useRef } from 'react';

interface NewTodoFormProps {
  // value: string;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange: React.ChangeEventHandler<HTMLInputElement>;
  // handleClick: () => void;
  handleClick: (text: string) => void;
}

// const NewTodoForm = ({ value, onChange, handleClick }: NewTodoFormProps) => {
const NewTodoForm = ({ handleClick }: NewTodoFormProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <input type="text" placeholder="new todo" ref={inputRef} />
      <button onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewTodoForm;
