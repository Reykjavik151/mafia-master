import React from 'react';
import { DefaultScreenContainer, ExtendedButton, Header } from '#components';
import { useSelectGameOptionsScreenController } from './hooks/useSelectGameOptionsScreenController';

export const SelectPlayerOrderScreen = () => {
  const {} = useSelectGameOptionsScreenController();

  return (
    <DefaultScreenContainer>
      <Header title="Game Options" />

      <ExtendedButton type="primary" title="Next" onPress={() => {}} />
    </DefaultScreenContainer>
  );
};
