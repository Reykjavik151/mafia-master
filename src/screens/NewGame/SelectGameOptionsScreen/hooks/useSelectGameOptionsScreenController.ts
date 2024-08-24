import { useRouter } from 'expo-router';
import { useCallback } from 'react';

export const useSelectGameOptionsScreenController = () => {
  const router = useRouter();

  const onNextPress = useCallback(() => {
    router.navigate('/new-game/select-players');
  }, [router]);

  return { onNextPress };
};
