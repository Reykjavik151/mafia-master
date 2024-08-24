import { NO_HEADER_OPTIONS } from '#constants/navigation';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={NO_HEADER_OPTIONS}>
      <Stack.Screen name="select-game-options" />
      <Stack.Screen name="select-players" />
      <Stack.Screen name="select-player-order" />
    </Stack>
  );
}
