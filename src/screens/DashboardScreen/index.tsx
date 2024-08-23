import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { DefaultScreenContainer, ExtendedButton, GameRecordRow, Header } from '#components';
import { useDashboardScreenController } from './hooks/useDashboardScreenController';
import { GameRecord } from '#models/GameRecord';

export const DashboardScreen = () => {
  const { gameRecords, gameRecordsKeyExtractor, onGamePress, goToNewGame } = useDashboardScreenController();

  const renderGameRecordItem: ListRenderItem<GameRecord> = useCallback(
    ({ item }) => <GameRecordRow item={item} onPress={onGamePress} />,
    [onGamePress],
  );

  return (
    <DefaultScreenContainer>
      <Header title="Dashboard" />

      <View className="flex-1">
        <FlatList
          data={gameRecords}
          renderItem={renderGameRecordItem}
          keyExtractor={gameRecordsKeyExtractor}
          className="flex-1"
          contentContainerClassName="flex-1 py-6 gap-6"
        />
        <ExtendedButton type="primary" title="Start Game" onPress={goToNewGame} />
      </View>
    </DefaultScreenContainer>
  );
};
