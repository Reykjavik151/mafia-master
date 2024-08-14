import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DefaultBackgroundLinear, ExtendedButton, GameRecordRow, Header } from '#components';
import { useDashboardScreenController } from './hooks/useDashboardScreenController';
import { GameRecord } from '#models/GameRecord';

export const DashboardScreen = () => {
  const { bottom: bottomInset, top: topInset } = useSafeAreaInsets();

  const { gameRecords, goToNewGame } = useDashboardScreenController();

  const renderGameRecordItem: ListRenderItem<GameRecord> = useCallback(({ item }) => <GameRecordRow item={item} />, []);

  return (
    <View className="flex-1">
      <Header title="DASHBOARD" />

      <View className="flex-1">
        <DefaultBackgroundLinear />

        <View style={{ paddingBottom: bottomInset }} className="flex-1">
          <FlatList
            data={[...gameRecords, ...gameRecords, ...gameRecords]}
            renderItem={renderGameRecordItem}
            keyExtractor={(item) => item.id.toString()}
            className="flex-1"
            contentContainerClassName="flex-1 p-6 gap-6"
          />
          <View className="self-center">
            <ExtendedButton type="primary" title="NEW GAME" onPress={goToNewGame} />
          </View>
        </View>
      </View>
    </View>
  );
};
