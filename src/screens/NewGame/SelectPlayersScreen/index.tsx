import React from 'react';
import { View } from 'react-native';
import { DefaultBackgroundLinear, Header, SearchBar, PlayerSearchList, ExtendedButton } from '#components';
import { useSelectPlayersScreenController } from './hooks/useSelectPlayersScreenController';
import { MAFIA_MAX_PLAYERS } from '#constants/mafia';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SelectPlayersScreen = () => {
  const { bottom: bottomInset } = useSafeAreaInsets();

  const {
    searchInputValue,
    setSearchInputValue,
    filteredPlayersBySearchValue,
    selectedPlayerIds,
    onPlayerPress,
    onNextPress,
  } = useSelectPlayersScreenController();

  return (
    <View className="flex-1">
      <DefaultBackgroundLinear />

      <Header title="Select Players" />

      <View className="flex-1" style={{ paddingBottom: bottomInset }}>
        <View className="p-6 pb-0">
          <SearchBar
            value={searchInputValue}
            onChangeText={setSearchInputValue}
            placeholder="Type a nickname or a name..."
          />
        </View>

        <PlayerSearchList
          data={filteredPlayersBySearchValue}
          onPlayerPress={onPlayerPress}
          selectedPlayerIds={selectedPlayerIds}
        />

        <View className="p-6 pb-0">
          <ExtendedButton
            disabled={selectedPlayerIds.length < MAFIA_MAX_PLAYERS}
            type="primary"
            title="Next"
            onPress={onNextPress}
          />
        </View>
      </View>
    </View>
  );
};
