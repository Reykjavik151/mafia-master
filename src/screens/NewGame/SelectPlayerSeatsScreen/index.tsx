import React from 'react';
import { View } from 'react-native';
import { DefaultBackgroundLinear, Header, PlayerOrderList } from '#components';
import { useSelectPlayerSeatsScreenController } from './hooks/useSelectPlayerSeatsScreenController';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SelectPlayerSeatsScreen = () => {
  const { bottom: bottomInset } = useSafeAreaInsets();

  const {} = useSelectPlayerSeatsScreenController();

  return (
    <View className="flex-1">
      <DefaultBackgroundLinear />

      <Header title="Select Player Seats" />

      <View className="flex-1" style={{ paddingBottom: bottomInset }}>
        <PlayerOrderList />
      </View>
    </View>
  );
};
