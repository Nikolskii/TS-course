import styled from 'styled-components';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { useRegion } from './use-region';


const optionsMap = {
  'Africa': { value: 'Africa', label: 'Africa' },
  'America': { value: 'America', label: 'America' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
}
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const [region, handleSelect] = useRegion();

  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={optionsMap[region] || ''}
        onChange={handleSelect}
      />
    </Wrapper>
  );
};
