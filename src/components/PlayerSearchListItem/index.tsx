import { Player } from '#models/Player';
import { Nullable } from '#types/Nullable';
import clsx from 'clsx';
import React, { useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';

type PlayerSearchListItemProps = Player & {
  selectedNum: Nullable<number>;
  onPress?: (playerId: string) => void;
};

export const PlayerSearchListItem = React.memo(
  ({ id, nickname, fullname, selectedNum, onPress: onPressProp }: PlayerSearchListItemProps) => {
    const isSelected = selectedNum !== null;

    const onPress = useCallback(() => {
      onPressProp?.(id);
    }, [id, onPressProp]);

    return (
      <Pressable onPress={onPress} className="flex basis-1/3 items-center">
        <View
          className={clsx(
            'rounded-full items-center justify-center w-[60px] h-[60px] mb-1 border-[2px]',
            isSelected && 'bg-purple300 border-grey200',
            !isSelected && 'bg-grey900 border-purple150',
          )}
        >
          <Text className="font-jost-medium text-3xl text-grey050">
            {selectedNum ??
              fullname
                .split(' ')
                .map((word) => word[0].toUpperCase())
                .join('')}
          </Text>
        </View>
        <Text numberOfLines={1} className="w-[90px] text-grey100 font-inter-semibold text-center text-md">
          {nickname}
        </Text>
        <Text numberOfLines={1} className="w-[90px] text-grey100 font-inter-regular text-center text-sm">
          {fullname}
        </Text>
      </Pressable>
    );
  },
);

PlayerSearchListItem.displayName = 'PlayerSearchListItem';
