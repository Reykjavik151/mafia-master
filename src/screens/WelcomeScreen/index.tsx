import React from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '#constants/colors';
import { CowboyHat } from 'phosphor-react-native';
import { DefaultBackgroundLinear, ExtendedButton } from '#components';
import { useWelcomeScreenController } from './hooks/useWelcomeScreenController';

export const WelcomeScreen = () => {
  const { goToDashboard } = useWelcomeScreenController();

  return (
    <View className="flex-1 justify-center items-center">
      <DefaultBackgroundLinear />
      <CowboyHat color={COLORS.primaryAccent} size={120} />
      <Text className="text-primaryAccent font-firasans-black text-4xl text-center pb-8">{'MAFIA MASTER'}</Text>
      <ExtendedButton type="primary" title="GO TO DASHBOARD" onPress={goToDashboard} />
    </View>
  );
};
