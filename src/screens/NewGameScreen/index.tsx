import React from 'react';
import { View } from 'react-native';
import { DefaultBackgroundLinear, Header, SearchBar } from '#components';
import { useNewGameScreenController } from './hooks/useNewGameScreenController';

export const NewGameScreen = () => {
  const { searchInputValue, setSearchInputValue } = useNewGameScreenController();

  return (
    <View className="flex-1">
      <DefaultBackgroundLinear />

      <Header title="NEW GAME" />

      <View className="flex-1">
        <View className="p-6">
          <SearchBar
            value={searchInputValue}
            onChangeText={setSearchInputValue}
            placeholder="Type a nickname or a name..."
          />
        </View>
      </View>
    </View>
  );
};
