import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { DefaultBackgroundLinear, ExtendedButton, Input } from '#components';
import { useLoginScreenController } from './hooks/useLoginScreenController';
import { COLORS } from '#constants/colors';
import { CowboyHat } from 'phosphor-react-native';

export const LoginScreen = () => {
  const {
    nicknameEmailInputValue,
    passwordInputValue,
    onLoginEmailInputValueChange,
    onPasswordInputValueChange,
    onSignIn,
  } = useLoginScreenController();

  return (
    <View className="flex-1">
      <DefaultBackgroundLinear />

      <ScrollView className="flex-1" contentContainerClassName="flex-1 px-6">
        <KeyboardAvoidingView className="flex-1 items-center justify-center" behavior="padding">
          <CowboyHat color={COLORS.grey3} size={120} />

          <Input
            value={nicknameEmailInputValue}
            onChangeText={onLoginEmailInputValueChange}
            placeholder="Nickname or email"
            keyboardType="email-address"
          />

          <View className="h-4" />

          <Input
            value={passwordInputValue}
            onChangeText={onPasswordInputValueChange}
            secureTextEntry
            placeholder="Password"
          />

          <View className="w-full mt-6">
            <ExtendedButton type="primary" title="Log in" onPress={onSignIn} />
          </View>

          <View className="h-20" />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
