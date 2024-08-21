import React from 'react';
import { KeyboardAvoidingView, ScrollView, View, Text } from 'react-native';
import { DefaultBackgroundLinear, ExtendedButton, ExtendedTextInput } from '#components';
import { useLoginScreenController } from './hooks/useLoginScreenController';
import { COLORS } from '#constants/colors';
import { CowboyHat, TelegramLogo } from 'phosphor-react-native';

export const LoginScreen = () => {
  const {
    passwordInputRef,
    nicknameEmailInputValue,
    passwordInputValue,
    onNicknameEmailInputValueChange,
    onPasswordInputValueChange,
    onSignIn,
    onSignUpViaTelegram,
  } = useLoginScreenController();

  return (
    <View className="flex-1">
      <DefaultBackgroundLinear />

      <ScrollView className="flex-1" contentContainerClassName="flex-1 px-6">
        <KeyboardAvoidingView className="flex-1 items-center justify-center" behavior="padding">
          <CowboyHat color={COLORS.grey3} size={120} />

          <View>
            <Text className="text-grey3 font-firasans-black text-4xl text-center pb-8">MAFIA MASTER</Text>
          </View>

          <ExtendedTextInput
            autoFocus
            value={nicknameEmailInputValue}
            onChangeText={onNicknameEmailInputValueChange}
            placeholder="Nickname or email"
            autoCorrect={false}
            textContentType="oneTimeCode"
            returnKeyType="next"
            onSubmitEditing={() => passwordInputRef.current?.focus()}
          />

          <View className="h-3" />

          <ExtendedTextInput
            ref={passwordInputRef}
            value={passwordInputValue}
            onChangeText={onPasswordInputValueChange}
            secureTextEntry
            placeholder="Password"
            autoCorrect={false}
            textContentType="oneTimeCode"
            returnKeyType="go"
            onSubmitEditing={onSignIn}
          />

          <View className="w-full mt-6">
            <ExtendedButton type="primary" title="Log in" onPress={onSignIn} />
          </View>

          <View className="w-full mt-2">
            <ExtendedButton
              type="secondary"
              LeftIcon={TelegramLogo}
              title="Sign up via Telegram"
              onPress={onSignUpViaTelegram}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
