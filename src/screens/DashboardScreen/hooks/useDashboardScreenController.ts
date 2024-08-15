import { GameRecord } from '#models/GameRecord';
import { selectGameRecords } from '#redux/games/gamesSelectors';
import { useAppSelector } from '#redux/hooks';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { useSpecificKeyExtractor } from 'react-native-hookbox';

export const useDashboardScreenController = () => {
  const router = useRouter();

  const gameRecords = useAppSelector(selectGameRecords);

  const gameRecordsKeyExtractor = useSpecificKeyExtractor<GameRecord>('game-record', 'id');

  const onGamePress = useCallback(
    (gameRecord: GameRecord) => {
      router.navigate(`/game/${gameRecord.id}`);
    },
    [router],
  );

  const goToNewGame = useCallback(() => {
    router.navigate('/new-game');
  }, [router]);

  return {
    gameRecords,
    gameRecordsKeyExtractor,
    onGamePress,
    goToNewGame,
  };
};
