import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

import { setTheme } from './theme-slice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, toggleTheme]
}
