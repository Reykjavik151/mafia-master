import { COLORS } from '#constants/colors';
import React, { forwardRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

export const ExtendedTextInput = forwardRef<TextInput, TextInputProps>(({ ...rest }, ref) => {
  return (
    <View className="w-full border-[1px] border-grey500 rounded-md bg-grey900 justify-center">
      <TextInput
        ref={ref}
        className="text-lg text-grey100 p-3"
        placeholderClassName="text-grey500"
        selectionColor={COLORS.accent}
        keyboardAppearance="dark"
        {...rest}
      />
    </View>
  );
});

ExtendedTextInput.displayName = 'ExtendedTextInput';
