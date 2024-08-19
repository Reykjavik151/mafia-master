import { TextInput, TextInputProps, View } from 'react-native';

type InputProps = TextInputProps;

export const Input = ({ ...rest }: InputProps) => {
  return (
    <View className="w-full border-[1px] border-grey5 rounded-lg bg-grey10 justify-center">
      <TextInput className="text-base text-grey3 p-3 pt-[6px]" placeholderClassName="text-grey7" {...rest} />
    </View>
  );
};
