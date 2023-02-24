import { useSelector } from 'react-redux';
import { SingleValue } from 'react-select';
import { useAppDispatch } from 'store';
import { Region } from 'types';
import { selectRegion } from './controls-selectors';
import { setRegion } from './controls-slice';
import { CountryOption } from './CustomSelect';

type onSelect = (reg: SingleValue<CountryOption>) => void;

export const useRegion = (): [Region | '', onSelect] => {
  const dispatch = useAppDispatch();
  const region = useSelector(selectRegion);

  const handleSelect: onSelect = (reg) => {
    if (reg) {
      dispatch(setRegion(reg.value));
    } else {
      dispatch(setRegion(''));
    }
  };

  return [region, handleSelect];
};
