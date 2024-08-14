import { GameRecord } from '#models/GameRecord';
import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

type GameRecordRowProps = {
  item: GameRecord;
};

export const GameRecordRowComponent = ({ item }: GameRecordRowProps) => {
  return (
    <View className="bg-secondary p-4 border-[2px] border-primaryAccent rounded-lg">
      <Text className="text-2xl font-manrope-medium text-primaryAccent">
        Game: {moment(item.datetime).format('DD MMM yyyy, hh:mm')}
      </Text>
    </View>
  );
};

export const GameRecordRow = React.memo(GameRecordRowComponent, ({ item }) => item.datetime === item.datetime);
