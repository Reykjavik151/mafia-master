import { useRouter } from 'expo-router';
import { useCallback } from 'react';

export const useWelcomeScreenController = () => {
  const router = useRouter();

  const goToDashboard = useCallback(() => {
    router.navigate('/dashboard');
  }, [router]);

  return {
    goToDashboard,
  };
};
