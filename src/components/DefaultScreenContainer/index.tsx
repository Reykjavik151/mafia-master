import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DefaultBackgroundLinear } from '#components/DefaultBackgroundLinear';

const ADDITIONAL_BOTTOM_PADDING = 12;

export const DefaultScreenContainer = ({ children, ...rest }: ViewProps) => {
  const { bottom: bottomInset } = useSafeAreaInsets();

  return (
    <View className="flex-1 px-6" style={{ paddingBottom: bottomInset + ADDITIONAL_BOTTOM_PADDING }} {...rest}>
      <DefaultBackgroundLinear />
      {children}
    </View>
  );
};
