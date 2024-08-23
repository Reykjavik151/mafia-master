import { COLORS } from '#constants/colors';
import { PLAYERS_DUMMY } from '#models/dummy/players.dummy';
import { Player } from '#models/Player';
import { generalStyles } from '#utils/generalStyles';
import { List } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DraggableFlatList, { RenderItemParams, ScaleDecorator } from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSpecificKeyExtractor } from 'react-native-hookbox';

export const PlayerOrderList = () => {
  const [data, setData] = useState(PLAYERS_DUMMY.slice(1));

  const keyExtractor = useSpecificKeyExtractor<Player>('player-order-item', 'id');

  const renderItem = ({ item, drag, isActive, getIndex }: RenderItemParams<Player>) => {
    const playerNumInList = (getIndex() ?? 0) + 1;

    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={{ backgroundColor: isActive ? COLORS.secondaryAccent : COLORS.grey10 }}
        >
          <View className="flex-row items-center">
            <View className="flex-row flex-1 items-center p-3">
              <Text className="font-jost-bold text-xl text-grey3 w-[30px]">{playerNumInList}</Text>
              <Text className="font-inter-bold text-xl text-grey3">{item.nickname}</Text>
            </View>
            <List size={30} color={COLORS.grey3} />
          </View>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <GestureHandlerRootView className="flex-1 bg-transparent">
      <DraggableFlatList
        data={data}
        onDragEnd={({ data }) => setData(data)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerClassName="p-6 pt-4"
        containerStyle={generalStyles.flex}
      />
    </GestureHandlerRootView>
  );
};
