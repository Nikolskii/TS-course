import { useAppDispatch } from 'store';
import { clearControls } from './controls-slice';

export const useCleanup = () => {
  const dispatch = useAppDispatch();

  const cleanUp = () => dispatch(clearControls());

  return () => dispatch(cleanUp());
};
