import AddNewItem from 'components/NewItem';
import { useAppDispatch } from 'redux-hook';
import { addTodo } from './todoSlice';

const NewTodo = () => {
  const dispatch = useAppDispatch();

  const handleNewTodo = (title: string) => {
    dispatch(addTodo(title));
  };

  return <AddNewItem handleClick={handleNewTodo} placeholder="add new todo" />;
};

export default NewTodo;
