import { MAFIA_MAX_PLAYERS } from '#constants/mafia';
import { PLAYERS_DUMMY } from '#models/dummy/players.dummy';
import { selectionAsync } from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';

export const useNewGameScreenController = () => {
  const router = useRouter();

  // const [players] = useState<Player[]>(PLAYERS_DUMMY.slice());
  const [selectedPlayerIds, setSelectedPlayerIds] = useState<string[]>([]);
  const [searchInputValue, setSearchInputValue] = useState('');

  const filteredPlayersBySearchValue = useMemo(() => {
    return PLAYERS_DUMMY.filter((player) => {
      if (!searchInputValue) {
        return true;
      }

      const lowercasedSearchValue = searchInputValue.toLowerCase();

      return (
        player.nickname.toLowerCase().includes(lowercasedSearchValue) ||
        player.fullname.toLowerCase().includes(lowercasedSearchValue)
      );
    });
  }, [searchInputValue]);

  const onPlayerPress = useCallback((playerId: string) => {
    selectionAsync();

    setSelectedPlayerIds((prev) => {
      // Deselect player
      if (prev.includes(playerId)) {
        return prev.filter((el) => el !== playerId);
      }

      // Max players limit, keep current array
      if (prev.length === MAFIA_MAX_PLAYERS) {
        return prev;
      }

      // Select player
      return [...prev, playerId];
    });
  }, []);

  const onNextPress = useCallback(() => {
    console.log('TODO: dispatch redux action to set players');
    // TODO:
    router.navigate('/dashboard');
  }, [router]);

  return {
    selectedPlayerIds,
    filteredPlayersBySearchValue,
    searchInputValue,
    setSearchInputValue,
    onPlayerPress,
    onNextPress,
  };
};
