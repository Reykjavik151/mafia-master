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

    console.log('item', id);

    return (
      <Pressable onPress={onPress} className="flex basis-1/3 items-center">
        <View
          className={clsx(
            'rounded-full items-center justify-center w-[60px] h-[60px] mb-1',
            isSelected && 'bg-secondaryAccent border-[4px] border-don',
            !isSelected && 'bg-secondary border-[2px] border-secondaryAccent',
          )}
        >
          <Text className="font-jost-bold text-xl text-grey3">
            {selectedNum ??
              fullname
                .split(' ')
                .map((word) => word[0].toUpperCase())
                .join('')}
          </Text>
        </View>
        <Text numberOfLines={1} className="w-[90px] text-grey3 font-inter-semibold text-center text-base">
          {nickname}
        </Text>
        <Text numberOfLines={1} className="w-[90px] text-grey3 font-inter-semibold text-center text-base">
          {fullname}
        </Text>
      </Pressable>
    );
  },
);

PlayerSearchListItem.displayName = 'PlayerSearchListItem';
