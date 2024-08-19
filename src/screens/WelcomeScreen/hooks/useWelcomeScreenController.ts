import { useRouter } from 'expo-router';
import { useCallback } from 'react';

export const useWelcomeScreenController = () => {
  const router = useRouter();

  const goToLogin = useCallback(() => {
    router.navigate('/login');
  }, [router]);

  return {
    goToLogin,
  };
};
