import React from 'react';
import { View } from 'react-native';
import { DefaultBackgroundLinear, Header, SearchBar, PlayerSearchList, ExtendedButton } from '#components';
import { useNewGameScreenController } from './hooks/useNewGameScreenController';
import { MAFIA_MAX_PLAYERS } from '#constants/mafia';

export const NewGameScreen = () => {
  const {
    searchInputValue,
    setSearchInputValue,
    filteredPlayersBySearchValue,
    selectedPlayerIds,
    onPlayerPress,
    onNextPress,
  } = useNewGameScreenController();

  return (
    <View className="flex-1">
      <DefaultBackgroundLinear />

      <Header title="NEW GAME" />

      <View className="flex-1">
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

        <View className="p-6">
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
