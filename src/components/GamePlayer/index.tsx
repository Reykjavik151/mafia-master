import { COLORS } from '#constants/colors';
import { PlayerNumber } from '#models/PlayerNumber';
import { PlayerRole } from '#models/PlayerRole';
import { Nullable } from '#types/Nullable';
import clsx from 'clsx';
import { CowboyHat, Heart, ShieldStar, ThumbsDown, Icon as IconType } from 'phosphor-react-native';
import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

type GamePlayerProps = {
  num: PlayerNumber;
  nickname: string;
  role: Nullable<PlayerRole>;
  isRoleVisible?: boolean;
};

export const GamePlayer = ({ num, nickname, role, isRoleVisible }: GamePlayerProps) => {
  const containerClassNames = useMemo(() => {
    if (!isRoleVisible || !role) {
      return 'bg-grey900 border-2 border-grey050';
    }

    switch (role) {
      case 'citizen':
        return 'bg-citizen';
      case 'sheriff':
        return 'bg-sheriff';
      case 'mafia':
        return 'bg-mafia';
      case 'don':
        return 'bg-don';
    }
  }, [role, isRoleVisible]);

  const InnerContent = useMemo(() => {
    if (!isRoleVisible || !role) {
      return <Text className="font-jost-bold text-grey050 text-2xl pt-1">{num}</Text>;
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
        <Icon color={COLORS.grey800} weight="fill" size={36} />
      </View>
    );
  }, [num, role, isRoleVisible]);

  return (
    <View>
      <View className={clsx(containerClassNames, 'rounded-full h-[60px] w-[60px] justify-center items-center')}>
        {isRoleVisible && role && <Text className="absolute top-0 font-jost-bold text-grey800 text-3xl">{num}</Text>}
        {InnerContent}
      </View>
      <Text className="text-grey050 font-inter-regular text-md text-center pt-1 w-[60px]" numberOfLines={1}>
        {nickname}
      </Text>
    </View>
  );
};
