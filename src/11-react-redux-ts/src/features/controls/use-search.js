import {useSelector, useDispatch} from 'react-redux';
import { selectSearch, setSearch } from './controls-slice';


export const useSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return [search, handleSearch];
}
