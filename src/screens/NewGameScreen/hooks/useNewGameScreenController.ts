import { useState } from 'react';

export const useNewGameScreenController = () => {
  const [searchInputValue, setSearchInputValue] = useState('');

  return {
    searchInputValue,
    setSearchInputValue,
  };
};
