import { GameRecord } from '#models/GameRecord';
import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import capitalize from 'lodash/capitalize';

type GameRecordRowProps = {
  item: GameRecord;
};

export const GameRecordRowComponent = ({ item }: GameRecordRowProps) => {
  return (
    <View className="bg-secondary p-4 border-[2px] border-primaryAccent rounded-lg">
      <Text className="text-2xl font-firasans-black text-primaryAccent">{capitalize(item.gameType)}</Text>
      <Text className="text-xl font-manrope-medium text-primaryAccent">
        {moment(item.datetime).format('DD MMMM yyyy, HH:mm')}
      </Text>
      <Text className="text-xl text-primaryAccent font-manrope-medium">
        Duration: {moment(item.duration).format('HH:mm')}
      </Text>
    </View>
  );
};

export const GameRecordRow = React.memo(GameRecordRowComponent, ({ item }) => item.datetime === item.datetime);
