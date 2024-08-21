import { useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';

export const useLoginScreenController = () => {
  const passwordInputRef = useRef<TextInput>(null);

  const [nicknameEmailInputValue, setNicknameEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');

  const onNicknameEmailInputSubmitEditing = useCallback(() => {
    passwordInputRef.current?.focus();
  }, []);

  const onSignIn = useCallback(() => {
    console.log('call login API here');
  }, []);

  const onSignUpViaTelegram = useCallback(() => {
    console.log('link sign up via telegram here');
  }, []);

  return {
    passwordInputRef,
    onSignIn,
    onSignUpViaTelegram,
    nicknameEmailInputValue,
    passwordInputValue,
    onPasswordInputValueChange: setPasswordInputValue,
    onNicknameEmailInputValueChange: setNicknameEmailInputValue,
    onNicknameEmailInputSubmitEditing,
  };
};
