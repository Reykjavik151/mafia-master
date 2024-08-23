import { COLORS } from '#constants/colors';
import clsx from 'clsx';
import { Icon } from 'phosphor-react-native';
import { useCallback, useMemo, useState } from 'react';
import { GestureResponderEvent, Pressable, PressableProps, Text, View } from 'react-native';
import { notificationAsync } from 'expo-haptics';

export type ExtendedButtonProps = PressableProps &
  (
    | {
        type: 'primary';
        title: string;
      }
    | {
        type: 'secondary';
        title: string;
        LeftIcon?: Icon;
      }
  );

export const ExtendedButton = ({
  type,
  onPressIn: onPressInProp,
  onPressOut: onPressOutProp,
  onPress: onPressProp,
  ...restProps
}: ExtendedButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const containerClassNames = useMemo(() => {
    switch (type) {
      default:
      case 'primary':
      case 'secondary':
        return 'p-4 rounded-md';
    }
  }, [type]);

  const notPressedContainerClassNames = useMemo(() => {
    switch (type) {
      default:
      case 'primary':
        return 'bg-accent border-[1px] border-accent';
      case 'secondary':
        return 'bg-grey800 border-[1px] border-grey700';
    }
  }, [type]);

  const pressedContainerClassNames = useMemo(() => {
    switch (type) {
      default:
      case 'primary':
        return 'bg-purple200 border-[1px] border-accent';
      case 'secondary':
        return 'bg-grey700 border-[1px] border-grey600';
    }
  }, [type]);

  const disabledContainerClassNames = useMemo(() => {
    switch (type) {
      default:
      case 'primary':
      case 'secondary':
        return 'opacity-50';
    }
  }, [type]);

  const InnerContent = useMemo(() => {
    switch (type) {
      case 'primary':
        return <Text className="text-grey050 font-inter-bold text-lg text-center">{restProps.title}</Text>;
      case 'secondary':
        const { LeftIcon } = restProps as { LeftIcon: Icon };

        return (
          <View className="flex-row justify-center items-center gap-3">
            {!!LeftIcon && <LeftIcon size={18} weight="fill" color={COLORS.grey050} />}
            <Text className="text-grey050 font-inter-bold text-lg text-center">{restProps.title}</Text>
          </View>
        );
    }
  }, [restProps, type]);

  const onPressIn = useCallback(
    (event: GestureResponderEvent) => {
      onPressInProp?.(event);
      setIsPressed(true);
    },
    [onPressInProp],
  );

  const onPressOut = useCallback(
    (event: GestureResponderEvent) => {
      onPressOutProp?.(event);
      setIsPressed(false);
    },
    [onPressOutProp],
  );

  const onPress = useCallback(
    (event: GestureResponderEvent) => {
      onPressProp?.(event);
      notificationAsync();
    },
    [onPressProp],
  );

  return (
    <Pressable
      className={clsx(
        containerClassNames,
        restProps.disabled && disabledContainerClassNames,
        !isPressed ? notPressedContainerClassNames : pressedContainerClassNames,
      )}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      {...restProps}
    >
      {InnerContent}
    </Pressable>
  );
};
