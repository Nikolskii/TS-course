import TodoItem from 'components/TodoItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from 'redux-hook';
import { Todo } from 'types';
import { selectAsyncTodos } from './asyncTodoSelectors';
import { fetchAllTodos, removeTodo, toggleTodo } from './todoAsyncActions';

const AsyncTodoList = () => {
  // const list = useAppSelector((state) => state.todos);
  const { list } = useSelector(selectAsyncTodos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id: Todo['id']) => {
    dispatch(toggleTodo(id));
  };

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

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

export default AsyncTodoList;
