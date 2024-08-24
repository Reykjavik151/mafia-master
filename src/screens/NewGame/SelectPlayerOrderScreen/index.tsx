import React from 'react';
import { BackButtonHeader, DefaultBackgroundLinear, ExtendedButton, PlayerOrderList } from '#components';
import { useSelectPlayerOrderScreenController } from './hooks/useSelectPlayerOrderScreenController';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SelectPlayerOrderScreen = () => {
  const { bottom: bottomInset } = useSafeAreaInsets();

  const { players, setPlayers, onStartGamePress } = useSelectPlayerOrderScreenController();

  return (
    <View className="flex-1" style={{ paddingBottom: bottomInset + 12 }}>
      <DefaultBackgroundLinear />

      <View className="px-6">
        <BackButtonHeader title="Player Order" />
      </View>

      <PlayerOrderList initialPlayers={players} onPlayerOrderChange={setPlayers} />

      <View className="px-6">
        <ExtendedButton type="primary" title="Start Game" onPress={onStartGamePress} />
      </View>
    </View>
  );
};
