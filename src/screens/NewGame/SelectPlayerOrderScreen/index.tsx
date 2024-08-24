import React from 'react';
import { DefaultBackgroundLinear, ExtendedButton, Header, PlayerOrderList } from '#components';
import { useSelectPlayerOrderScreenController } from './hooks/useSelectPlayerOrderScreenController';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SelectPlayerOrderScreen = () => {
  const { bottom: bottomInset } = useSafeAreaInsets();

  const { onStartGamePress } = useSelectPlayerOrderScreenController();

  return (
    <View className="flex-1" style={{ paddingBottom: bottomInset + 12 }}>
      <DefaultBackgroundLinear />

      <Header title="Player Order" />

      <PlayerOrderList />

      <View className="px-6">
        <ExtendedButton type="primary" title="Start Game" onPress={onStartGamePress} />
      </View>
    </View>
  );
};
