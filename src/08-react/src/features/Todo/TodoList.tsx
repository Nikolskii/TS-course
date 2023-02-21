import TodoItem from 'components/TodoItem';
import { useAppDispatch, useAppSelector } from 'redux-hook';
import { Todo } from 'types';
import { removeTodo, toggleTodo } from './todoSlice';

const TodoList = () => {
  const list = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id: Todo['id']) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={handleToggleTodo}
          removeTodo={handleRemoveTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
