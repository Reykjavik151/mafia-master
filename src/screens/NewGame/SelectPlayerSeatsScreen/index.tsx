import React from 'react';
import { DefaultBackgroundLinear, ExtendedButton, Header, PlayerOrderList } from '#components';
import { useSelectPlayerSeatsScreenController } from './hooks/useSelectPlayerSeatsScreenController';
import { ArrowsClockwise } from 'phosphor-react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SelectPlayerSeatsScreen = () => {
  const { bottom: bottomInset } = useSafeAreaInsets();

  const {} = useSelectPlayerSeatsScreenController();

  return (
    <View className="flex-1" style={{ paddingBottom: bottomInset + 12 }}>
      <DefaultBackgroundLinear />

      <Header title="Player Order" />

      <View className="px-6 pt-5">
        <ExtendedButton type="secondary" title="Randomize" LeftIcon={ArrowsClockwise} onPress={() => {}} />
      </View>

      <PlayerOrderList />

      <View className="px-6">
        <ExtendedButton type="primary" title="Start Game" onPress={() => {}} />
      </View>
    </View>
  );
};
