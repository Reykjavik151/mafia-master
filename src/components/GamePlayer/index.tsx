import { COLORS } from '#constants/colors';
import { PlayerNumber } from '#models/PlayerNumber';
import { PlayerRole } from '#models/PlayerRole';
import clsx from 'clsx';
import { CowboyHat, Heart, ShieldStar, ThumbsDown, Icon as IconType } from 'phosphor-react-native';
import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

type GamePlayerProps = {
  num: PlayerNumber;
  nickname: string;
  role?: PlayerRole;
  isRoleVisible?: boolean;
};

export const GamePlayer = ({ num, nickname, role, isRoleVisible }: GamePlayerProps) => {
  const containerClassNames = useMemo(() => {
    if (!isRoleVisible) {
      return 'bg-secondary border-2 border-primaryAccent';
    }

    switch (role) {
      case 'citizen':
        return 'bg-redAccent';
      case 'sheriff':
        return 'bg-yellowAccent';
      case 'mafia':
        return 'bg-grayAccent';
      case 'don':
        return 'bg-primaryAccent';
    }
  }, [role, isRoleVisible]);

  const InnerContent = useMemo(() => {
    if (!isRoleVisible) {
      return <Text className="font-jost-bold text-primaryAccent text-2xl pt-1">{num}</Text>;
    }

    let Icon: IconType;
    switch (role) {
      default:
      case 'citizen':
        Icon = Heart;
        break;
      case 'sheriff':
        Icon = ShieldStar;
        break;
      case 'mafia':
        Icon = ThumbsDown;
        break;
      case 'don':
        Icon = CowboyHat;
        break;
    }

    return (
      <View className="-mb-3">
        <Icon color={COLORS.primary} size={36} />
      </View>
    );
  }, [num, role, isRoleVisible]);

  return (
    <View>
      <View className={clsx(containerClassNames, 'rounded-full h-[60px] w-[60px] justify-center items-center')}>
        {isRoleVisible && <Text className="mx-auto absolute top-0 font-jost-bold text-primary text-2xl">{num}</Text>}
        {InnerContent}
      </View>
      <Text className="text-primaryAccent font-inter-regular text-md text-center pt-1 w-[60px]" numberOfLines={1}>
        {nickname}
      </Text>
    </View>
  );
};
