import AddNewItem from 'components/NewItem';
import { useAppDispatch } from 'redux-hook';
import { createTodo } from './todoAsyncActions';

const NewAsyncTodo = () => {
  const dispatch = useAppDispatch();

  const handleNewTodo = (title: string) => {
    dispatch(createTodo(title));
  };

  return <AddNewItem handleClick={handleNewTodo} placeholder="add new todo" />;
};

export default NewAsyncTodo;
