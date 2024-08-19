import { useCallback, useState } from 'react';

export const useLoginScreenController = () => {
  const [nicknameEmailInputValue, setLoginEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');

  const onSignIn = useCallback(() => {
    console.log('call login API here');
  }, []);

  return {
    onSignIn,
    nicknameEmailInputValue,
    passwordInputValue,
    onPasswordInputValueChange: setPasswordInputValue,
    onLoginEmailInputValueChange: setLoginEmailInputValue,
  };
};
