import { selectGameRecords } from '#redux/games/gamesSelectors';
import { useAppSelector } from '#redux/hooks';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';

export const useDashboardScreenController = () => {
  const router = useRouter();

  const gameRecords = useAppSelector(selectGameRecords);

  const goToNewGame = useCallback(() => {
    router.navigate('/new-game');
  }, [router]);

  return {
    gameRecords,
    goToNewGame,
  };
};
