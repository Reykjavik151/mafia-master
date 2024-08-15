import { GamePlayer } from '#components/GamePlayer';
import React from 'react';
import { View } from 'react-native';

type GameTableProps = {
  isRolesVisible?: boolean;
};

export const GameTable = ({ isRolesVisible = false }: GameTableProps) => {
  return (
    <View className="flex-1 px-6">
      <View className="flex-row justify-between mx-[60px]">
        <GamePlayer num={5} role="citizen" isRoleVisible={isRolesVisible} nickname="Opium" />
        <GamePlayer num={6} role="sheriff" isRoleVisible={isRolesVisible} nickname="Opium" />
      </View>

      <View className="flex-row justify-between mt-4">
        <GamePlayer num={4} role="mafia" isRoleVisible={isRolesVisible} nickname="Opium" />
        <GamePlayer num={7} role="citizen" isRoleVisible={isRolesVisible} nickname="Adamant" />
      </View>

      <View className="flex-row justify-between mt-4">
        <GamePlayer num={3} role="citizen" isRoleVisible={isRolesVisible} nickname="Marsianka" />
        <GamePlayer num={8} role="citizen" isRoleVisible={isRolesVisible} nickname="Chaska Chaya" />
      </View>

      <View className="flex-row justify-between mt-4">
        <GamePlayer num={2} role="mafia" isRoleVisible={isRolesVisible} nickname="Экстрасенс" />
        <GamePlayer num={9} role="citizen" isRoleVisible={isRolesVisible} nickname="Opium" />
      </View>

      <View className="flex-row justify-between mt-4 mx-[60px]">
        <GamePlayer num={1} role="don" isRoleVisible={isRolesVisible} nickname="Opium" />
        <GamePlayer num={10} role="citizen" isRoleVisible={isRolesVisible} nickname="Opium" />
      </View>
    </View>
  );
};
