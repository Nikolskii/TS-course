import React, { useState } from 'react';
import Search from './Search';

const Controls = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Search search={search} />
    </div>
  );
};

export default Controls;
