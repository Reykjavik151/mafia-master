import React from 'react';
import { View } from 'react-native';
import { SearchBar, PlayerSearchList, ExtendedButton, DefaultScreenContainer, BackButtonHeader } from '#components';
import { useSelectPlayersScreenController } from './hooks/useSelectPlayersScreenController';
import { MAFIA_MAX_PLAYERS } from '#constants/mafia';

export const SelectPlayersScreen = () => {
  const {
    searchInputValue,
    setSearchInputValue,
    filteredPlayersBySearchValue,
    selectedPlayerIds,
    onPlayerPress,
    onNextPress,
  } = useSelectPlayersScreenController();

  return (
    <DefaultScreenContainer>
      <BackButtonHeader title="Select Players" />

      <View className="flex-1">
        <View className="py-6 pb-0">
          <SearchBar value={searchInputValue} onChangeText={setSearchInputValue} placeholder="Type a name..." />
        </View>

        <PlayerSearchList
          data={filteredPlayersBySearchValue}
          onPlayerPress={onPlayerPress}
          selectedPlayerIds={selectedPlayerIds}
        />

        <ExtendedButton
          disabled={selectedPlayerIds.length < MAFIA_MAX_PLAYERS}
          type="primary"
          title="Next"
          onPress={onNextPress}
        />
      </View>
    </DefaultScreenContainer>
  );
};
