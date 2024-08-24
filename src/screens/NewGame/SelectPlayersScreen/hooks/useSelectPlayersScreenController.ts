import { MAFIA_MAX_PLAYERS } from '#constants/mafia';
import { PLAYERS_DUMMY } from '#models/dummy/players.dummy';
import { addNewGameOptions } from '#redux/currentGame/currentGameSlice';
import { useAppDispatch } from '#redux/hooks';
import { convertPlayersArrToTenRecord } from '#utils/players';
import { selectionAsync } from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';

export const useSelectPlayersScreenController = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  // const [players] = useState<Player[]>(...);
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
    const players = selectedPlayerIds.map((playerId) => PLAYERS_DUMMY.find((player) => player.id === playerId)!);
    dispatch(addNewGameOptions({ players: convertPlayersArrToTenRecord(players) }));

    router.navigate('/new-game/select-player-order');
  }, [dispatch, router, selectedPlayerIds]);

  return {
    selectedPlayerIds,
    filteredPlayersBySearchValue,
    searchInputValue,
    setSearchInputValue,
    onPlayerPress,
    onNextPress,
  };
};
