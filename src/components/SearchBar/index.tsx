import React, { useRef } from 'react';
import { Pressable, TextInput, TextInputProps } from 'react-native';
import { MagnifyingGlass } from 'phosphor-react-native';
import { COLORS } from '#constants/colors';

export const SearchBar = ({ ...rest }: TextInputProps) => {
  const inputRef = useRef<TextInput>(null);

  return (
    <Pressable className="w-full border-[1px] border-grey500 rounded-lg bg-grey900 items-center flex-row px-3">
      <MagnifyingGlass size={13} color={COLORS.grey500} />
      <TextInput
        ref={inputRef}
        className="flex-1 text-lg text-grey100 p-3 pl-2"
        placeholderClassName="text-grey500"
        selectionColor={COLORS.accent}
        autoCorrect={false}
        keyboardAppearance="dark"
        hitSlop={{ left: 30 }}
        {...rest}
      />
    </Pressable>
  );
};

SearchBar.displayName = 'SearchBar';
