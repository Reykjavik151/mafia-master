import { CaretLeft } from 'phosphor-react-native';
import { Header, HeaderProps } from '..';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { COLORS } from '#constants/colors';
import { EXTENDED_HIT_SLOP_10 } from '#constants/hitSlop';

export const BackButtonHeader = ({ ...props }: HeaderProps) => {
  const router = useRouter();

  const onBackPress = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Header
      leftAbsoluteElement={
        <TouchableOpacity onPress={onBackPress} hitSlop={EXTENDED_HIT_SLOP_10}>
          <View className="pt-[2px] mr-6">
            <CaretLeft size={30} color={COLORS.grey050} />
          </View>
        </TouchableOpacity>
      }
      {...props}
    />
  );
};
