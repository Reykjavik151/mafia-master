import React, { useRef } from 'react';
import { Pressable, TextInput, TextInputProps } from 'react-native';
import { MagnifyingGlass } from 'phosphor-react-native';
import { COLORS } from '#constants/colors';

export const SearchBar = ({ ...rest }: TextInputProps) => {
  const inputRef = useRef<TextInput>(null);

  return (
    <Pressable className="w-full border-[1px] border-grey5 rounded-lg bg-grey10 items-center flex-row px-3">
      <MagnifyingGlass size={16} color={COLORS.grey3} />
      <TextInput
        ref={inputRef}
        className="flex-1 text-xl text-grey3 p-3 pt-[6px]"
        placeholderClassName="text-grey6"
        selectionColor={COLORS.citizen}
        keyboardAppearance="dark"
        {...rest}
      />
    </Pressable>
  );
};

SearchBar.displayName = 'SearchBar';
