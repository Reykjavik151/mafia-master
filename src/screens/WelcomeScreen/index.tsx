import React from 'react';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '#constants/colors';
import { generalStyles } from '#utils/generalStyles';
import { CowboyHat } from 'phosphor-react-native';

export const WelcomeScreen = () => {
  const router = useRouter();

  const goToStoryCreator = useCallback(() => {
    router.replace('/(tabs)/page-stack/page-creator');
  }, [router]);

  return (
    <View className="flex-1 justify-center items-center">
      <LinearGradient colors={[COLORS.primary, COLORS.secondary]} style={generalStyles.absoluteContainer} />
      <CowboyHat color={COLORS.primaryAccent} size={120} />
      <Text className="text-primaryAccent font-firasans-black text-4xl text-center pb-8">{'MAFIA MASTER'}</Text>
      <Text className="text-primaryAccent font-firasans-black text-2xl" onPress={goToStoryCreator}>
        {'GO MASTER >'}
      </Text>
    </View>
  );
};
