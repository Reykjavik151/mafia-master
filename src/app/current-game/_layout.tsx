import { NO_HEADER_OPTIONS } from '#constants/navigation';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ ...NO_HEADER_OPTIONS, gestureEnabled: false }}>
      <Stack.Screen name="game" />
    </Stack>
  );
}
