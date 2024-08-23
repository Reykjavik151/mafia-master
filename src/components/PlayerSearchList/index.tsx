import { PlayerSearchListItem } from '#components/PlayerSearchListItem';
import { Player } from '#models/Player';
import { useCallback } from 'react';
import { FlatList, FlatListProps, ListRenderItem } from 'react-native';
import { useSpecificKeyExtractor } from 'react-native-hookbox';

type PlayerSearchListProps = Pick<FlatListProps<Player>, 'data'> & {
  selectedPlayerIds: string[];
  onPlayerPress: (playerId: string) => void;
};

export const PlayerSearchList = ({ data, selectedPlayerIds, onPlayerPress }: PlayerSearchListProps) => {
  const renderSearchPlayerItem: ListRenderItem<Player> = useCallback(
    ({ item }) => {
      const selectedNum = selectedPlayerIds.findIndex((el) => el === item.id);

      return (
        <PlayerSearchListItem
          id={item.id}
          nickname={item.nickname}
          fullname={item.fullname}
          selectedNum={selectedNum !== -1 ? selectedNum + 1 : null}
          onPress={onPlayerPress}
        />
      );
    },
    [onPlayerPress, selectedPlayerIds],
  );

  const keyExtractor = useSpecificKeyExtractor<Player>('search-player-circle', 'id');

  return (
    <FlatList
      numColumns={3}
      data={data}
      renderItem={renderSearchPlayerItem}
      keyExtractor={keyExtractor}
      contentContainerClassName="py-6 flex-1 gap-6"
    />
  );
};
