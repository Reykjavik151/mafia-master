import React from 'react';
import { View } from 'react-native';
import { BackButtonHeader, DefaultScreenContainer, ExtendedButton } from '#components';
import { useSelectGameOptionsScreenController } from './hooks/useSelectGameOptionsScreenController';

export const SelectGameOptionsScreen = () => {
  const { onNextPress } = useSelectGameOptionsScreenController();

  return (
    <DefaultScreenContainer>
      <BackButtonHeader title="Game Options" />

      <View className="flex-1" />

      <ExtendedButton type="primary" title="Next" onPress={onNextPress} />
    </DefaultScreenContainer>
  );
};
