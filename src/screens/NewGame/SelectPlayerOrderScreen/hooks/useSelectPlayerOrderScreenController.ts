import { useRouter } from 'expo-router';
import { useCallback } from 'react';

export const useSelectPlayerOrderScreenController = () => {
  const router = useRouter();

  const onStartGamePress = useCallback(() => {
    router.navigate('/game');
  }, [router]);

  return { onStartGamePress };
};
