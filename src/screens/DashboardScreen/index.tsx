import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DefaultBackgroundLinear, ExtendedButton } from '#components';
import { useDashboardScreenController } from './hooks/useDashboardScreenController';

export const DashboardScreen = () => {
  const { bottom: bottomInset } = useSafeAreaInsets();
  const { goToNewGame } = useDashboardScreenController();

  return (
    <View className="flex-1">
      <DefaultBackgroundLinear />

      <View style={{ paddingBottom: bottomInset }} className="flex-1">
        <FlatList data={[1, 2, 3]} renderItem={() => <Text>1</Text>} className="flex-1" />
        <View className="self-center">
          <ExtendedButton type="primary" title="NEW GAME" onPress={goToNewGame} />
        </View>
      </View>
    </View>
  );
};
