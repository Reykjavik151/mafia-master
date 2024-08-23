import { GameRecord } from '#models/GameRecord';
import React, { useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import moment from 'moment';
import capitalize from 'lodash/capitalize';

type GameRecordRowProps = {
  item: GameRecord;
  onPress: (item: GameRecord) => void;
};

export const GameRecordRowComponent = ({ item, onPress: onPressProp }: GameRecordRowProps) => {
  const onPress = useCallback(() => {
    onPressProp(item);
  }, [item, onPressProp]);

  return (
    <Pressable onPress={onPress}>
      <View className="bg-secondary p-4 border-[2px] border-grey200 rounded-lg">
        <Text className="text-2xl font-firasans-bold text-grey100">
          {item.master.nickname}'s {capitalize(item.gameType)}
        </Text>
        <Text className="text-xl font-inter-medium text-grey100">
          {moment(item.datetime).format('DD MMMM yyyy, HH:mm')}
        </Text>
        <Text className="text-xl text-grey100 font-inter-medium">
          Duration: {moment(item.duration).format('HH:mm')}
        </Text>
      </View>
    </Pressable>
  );
};

export const GameRecordRow = React.memo(GameRecordRowComponent, ({ item }) => item.datetime === item.datetime);
