import { COLORS } from '#constants/colors';
import clsx from 'clsx';
import { Icon } from 'phosphor-react-native';
import { useCallback, useMemo, useState } from 'react';
import { GestureResponderEvent, Pressable, PressableProps, Text, View } from 'react-native';

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
  ...restProps
}: ExtendedButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const containerClassNames = useMemo(() => {
    switch (type) {
      default:
      case 'primary':
      case 'secondary':
        return 'px-4 py-3 rounded-lg';
    }
  }, [type]);

  const notPressedContainerClassNames = useMemo(() => {
    switch (type) {
      default:
      case 'primary':
        return 'bg-secondaryAccent border-[1px] border-grey3';
      case 'secondary':
        return 'bg-grey9 border-[1px] border-grey8';
    }
  }, [type]);

  const pressedContainerClassNames = useMemo(() => {
    switch (type) {
      default:
      case 'primary':
        return 'bg-secondaryAccent border-[1px] border-secondaryAccent';
    }
  }, [type]);

  const InnerContent = useMemo(() => {
    switch (type) {
      case 'primary':
        return <Text className="text-grey3 font-inter-black text-xl text-center">{restProps.title}</Text>;
      case 'secondary':
        const { LeftIcon } = restProps as { LeftIcon: Icon };

        return (
          <View className="flex-row justify-center items-center gap-3">
            {!!LeftIcon && <LeftIcon size={24} color={COLORS.grey3} />}
            <Text className="text-grey3 font-inter-black text-xl text-center">{restProps.title}</Text>
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

  return (
    <Pressable
      className={clsx(containerClassNames, !isPressed ? notPressedContainerClassNames : pressedContainerClassNames)}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...restProps}
    >
      {InnerContent}
    </Pressable>
  );
};
