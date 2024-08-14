import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DefaultBackgroundLinear } from '#components';

export const NewGameScreen = () => {
  const { top: topInset, bottom: bottomInset } = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: topInset }} className="flex-1">
      <DefaultBackgroundLinear />
    </View>
  );
};
