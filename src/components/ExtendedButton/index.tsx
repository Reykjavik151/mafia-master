import clsx from 'clsx';
import { useCallback, useMemo, useState } from 'react';
import { GestureResponderEvent, Pressable, PressableProps, Text } from 'react-native';

export type ExtendedButtonProps = PressableProps & {
  type: 'primary';
  title: string;
};

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
        return 'px-4 py-2 rounded-lg';
    }
  }, [type]);

  const notPressedContainerClassNames = useMemo(() => {
    switch (type) {
      default:
      case 'primary':
        return 'bg-primary border-2 border-primaryAccent';
    }
  }, [type]);

  const pressedContainerClassNames = useMemo(() => {
    switch (type) {
      default:
      case 'primary':
        return 'bg-primary border-2 border-secondaryAccent';
    }
  }, [type]);

  const InnerContent = useMemo(() => {
    switch (type) {
      case 'primary':
        return <Text className="text-primaryAccent font-firasans-bold text-2xl">{restProps.title}</Text>;
    }
  }, [restProps.title, type]);

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
