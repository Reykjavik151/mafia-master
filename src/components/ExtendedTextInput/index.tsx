import { COLORS } from '#constants/colors';
import React, { forwardRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

export const ExtendedTextInput = forwardRef<TextInput, TextInputProps>(({ ...rest }, ref) => {
  return (
    <View className="w-full border-[1px] border-grey5 rounded-lg bg-grey10 justify-center">
      <TextInput
        ref={ref}
        className="text-xl text-grey3 p-3 pt-[6px]"
        placeholderClassName="text-grey6"
        selectionColor={COLORS.citizen}
        keyboardAppearance="dark"
        {...rest}
      />
    </View>
  );
});

ExtendedTextInput.displayName = 'ExtendedTextInput';
