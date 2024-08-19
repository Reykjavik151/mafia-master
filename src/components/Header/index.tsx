import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type HeaderProps = {
  title: string;
  leftAbsoluteElement?: React.ReactNode;
  rightAbsoluteElement?: React.ReactNode;
};

export const Header = ({ title, leftAbsoluteElement, rightAbsoluteElement }: HeaderProps) => {
  const { top: topInset } = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: topInset }} className="border-b-2 border-grey3 bg-primary">
      <View className="pt-2 pb-4 row items-center">
        {!!leftAbsoluteElement && (
          <View className="absolute left-0 top-0 bottom-0 justify-center">{leftAbsoluteElement}</View>
        )}

        <Text className="text-grey3 font-firasans-black text-2xl">{title}</Text>

        {!!rightAbsoluteElement && (
          <View className="absolute right-0 top-0 bottom-0 justify-center">{rightAbsoluteElement}</View>
        )}
      </View>
    </View>
  );
};
