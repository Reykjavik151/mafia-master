import { useRouter } from 'expo-router';
import { useCallback } from 'react';

export const useDashboardScreenController = () => {
  const router = useRouter();

  const goToNewGame = useCallback(() => {
    router.navigate('/new-game');
  }, [router]);

  return {
    goToNewGame,
  };
};
