import React from 'react';
import { View, Text } from 'react-native';
import { DefaultScreenContainer, Header } from '#components';
import { useGameInfoScreenController } from './hooks/useGameInfoScreenController';
import { CountdownCircleTimer, TimeProps } from 'react-native-countdown-circle-timer';
import { COLORS } from '#constants/colors';

export const GameInfoScreen = () => {
  const {} = useGameInfoScreenController();

  return (
    <DefaultScreenContainer>
      <Header title="Game Information" />

      <View className="flex-1 justify-center items-center">
        <CountdownCircleTimer
          isPlaying
          rotation="counterclockwise"
          duration={10}
          colors={[COLORS.accent as `#${string}`, COLORS.purple1000 as `#${string}`]}
          colorsTime={[10, 0]}
          onComplete={() => console.log('finish')}
        >
          {({ remainingTime }: TimeProps) => (
            <Text className="text-grey3 text-6xl font-inter-bold pt-4">{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
      </View>
    </DefaultScreenContainer>
  );
};
