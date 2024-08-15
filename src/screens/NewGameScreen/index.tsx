import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DefaultBackgroundLinear, GameTable } from '#components';

export const NewGameScreen = () => {
  const { top: topInset } = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: topInset }} className="flex-1">
      <DefaultBackgroundLinear />

      <GameTable isRolesVisible={false} />
    </View>
  );
};
