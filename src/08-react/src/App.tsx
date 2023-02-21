import TodoList from './features/Todo/TodoList';
import NewTodo from 'features/Todo/NewTodo';
import './App.css';

function App() {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
