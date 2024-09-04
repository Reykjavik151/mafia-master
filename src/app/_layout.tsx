import { Stack } from 'expo-router';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import '../../nativewind.css';

import { NO_HEADER_OPTIONS } from '#constants/navigation';
import { useFontInit } from '#hooks/useFontInit';

import { store } from '../redux/store';

// Root navigation stack
const RootStack = () => (
  <Stack screenOptions={NO_HEADER_OPTIONS}>
    <Stack.Screen name="welcome" />
    <Stack.Screen name="login" />
    <Stack.Screen name="dashboard" />
    <Stack.Screen name="new-game" />
  </Stack>
);

// Here we can apply different context providers
export default function RootLayout() {
  const isFontsLoadFinished = useFontInit();
  if (!isFontsLoadFinished) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <StatusBar barStyle="light-content" />
            <RootStack />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ReduxProvider>
  );
}
