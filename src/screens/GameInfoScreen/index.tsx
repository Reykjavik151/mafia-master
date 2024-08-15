import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DefaultBackgroundLinear, Header } from '#components';
import { useGameInfoScreenController } from './hooks/useGameInfoScreenController';
import { CountdownCircleTimer, ColorFormat, TimeProps } from 'react-native-countdown-circle-timer';
import { COLORS } from '#constants/colors';

export const GameInfoScreen = () => {
  const { bottom: bottomInset } = useSafeAreaInsets();

  const {} = useGameInfoScreenController();

  return (
    <View className="flex-1">
      <Header title="GAME INFO" />

      <View className="flex-1 justify-center items-center">
        <DefaultBackgroundLinear />

        <CountdownCircleTimer
          isPlaying
          rotation="counterclockwise"
          duration={10}
          colors={[COLORS.secondaryAccent as `#${string}`, COLORS.secondary as `#${string}`]}
          colorsTime={[10, 0]}
          onComplete={() => console.log('finish')}
        >
          {({ remainingTime }: TimeProps) => (
            <Text className="text-primaryAccent text-6xl font-inter-bold pt-4">{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
      </View>
    </View>
  );
};
