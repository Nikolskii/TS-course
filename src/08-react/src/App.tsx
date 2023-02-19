import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

type ITodo = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [] = useState<ITodo | null>(null);

  return (
    <div className="App">
      <TodoItem
        id="112"
        title="first todo"
        completed={false}
        style={{
          border: '1px solid white',
        }}
      />
    </div>
  );
}

export default App;
