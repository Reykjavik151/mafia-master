import { ExtendedButton } from '#components/ExtendedButton';
import { COLORS } from '#constants/colors';
import { PLAYERS_DUMMY } from '#models/dummy/players.dummy';
import { Player } from '#models/Player';
import { Nullable } from '#types/Nullable';
import { generalStyles } from '#utils/generalStyles';
import { selectionAsync } from 'expo-haptics';
import { ArrowsClockwise, List } from 'phosphor-react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DraggableFlatList, { RenderItemParams, ScaleDecorator } from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSpecificKeyExtractor } from 'react-native-hookbox';
import shuffle from 'lodash/shuffle';

type PlayerOrderListProps = {
  initialPlayers: Player[];
  onPlayerOrderChange: (newPlayersOrder: Player[]) => void;
};

export const PlayerOrderList = ({ initialPlayers, onPlayerOrderChange }: PlayerOrderListProps) => {
  const [data, setData] = useState(initialPlayers);

  const [placeholderIndex, setPlaceholderIndex] = useState<Nullable<number>>(null);

  const keyExtractor = useSpecificKeyExtractor<Player>('player-order-item', 'id');

  useEffect(() => {
    onPlayerOrderChange(data);
  }, [data, onPlayerOrderChange]);

  const onPlaceholderItemChange = useCallback((index: number) => {
    setPlaceholderIndex(index);
    selectionAsync();
  }, []);

  const onShufflePress = useCallback(() => {
    setData((prev) => shuffle(prev));
  }, []);

  const renderItem = ({ item, drag, isActive, getIndex }: RenderItemParams<Player>) => {
    const playerNumInList = (getIndex() ?? 0) + 1;
    const numberToShow = (isActive && placeholderIndex !== null && placeholderIndex + 1) || playerNumInList;

    return (
      <ScaleDecorator>
        <TouchableOpacity onLongPress={drag} disabled={isActive} activeOpacity={1}>
          <View
            className="flex-row items-center border-[1px] border-grey500 rounded-xl my-1"
            style={{ backgroundColor: isActive ? COLORS.grey800 : COLORS.grey900 }}
          >
            <View className="flex-row flex-1 items-center p-3">
              <View className="w-[30px] h-full -ml-1">
                <Text className="font-jost-bold text-md text-center text-grey100 w-[30px]">{numberToShow}</Text>
              </View>
              <Text className="font-inter-semibold text-md text-grey3 flex-1 text-grey100" numberOfLines={1}>
                {item.nickname}
              </Text>
              <List size={30} color={COLORS.grey300} />
            </View>
          </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <>
      <View className="px-6 pt-5">
        <ExtendedButton type="secondary" title="Randomize" LeftIcon={ArrowsClockwise} onPress={onShufflePress} />
      </View>
      <GestureHandlerRootView className="flex-1 bg-transparent">
        <DraggableFlatList
          data={data}
          onDragEnd={({ data: newData }) => {
            setData(newData);
            setPlaceholderIndex(null);
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerClassName="p-6 pt-4"
          containerStyle={generalStyles.flex}
          onPlaceholderIndexChange={onPlaceholderItemChange}
        />
      </GestureHandlerRootView>
    </>
  );
};
