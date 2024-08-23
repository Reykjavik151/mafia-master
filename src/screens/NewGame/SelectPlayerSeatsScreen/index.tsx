import React from 'react';
import { DefaultScreenContainer, Header, PlayerOrderList } from '#components';
import { useSelectPlayerSeatsScreenController } from './hooks/useSelectPlayerSeatsScreenController';

export const SelectPlayerSeatsScreen = () => {
  const {} = useSelectPlayerSeatsScreenController();

  return (
    <DefaultScreenContainer>
      <Header title="Select Player Seats" />

      <PlayerOrderList />
    </DefaultScreenContainer>
  );
};
