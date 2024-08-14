import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DefaultBackgroundLinear, ExtendedButton } from '#components';
import { useDashboardScreenController } from './hooks/useDashboardScreenController';

export const DashboardScreen = () => {
  const { bottom: bottomInset } = useSafeAreaInsets();
  const { goToNewGame } = useDashboardScreenController();

  return (
    <View className="flex-1 justify-center items-center">
      <DefaultBackgroundLinear />

      <View style={{ paddingBottom: bottomInset }}>
        <ExtendedButton type="primary" title="NEW GAME" onPress={goToNewGame} />
      </View>
    </View>
  );
};
