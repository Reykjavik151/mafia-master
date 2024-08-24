import { GamePlayer } from '#components/GamePlayer';
import { Player } from '#models/Player';
import { TenPlayersRecord } from '#models/TenPlayersRecord';
import React from 'react';
import { View } from 'react-native';

type GameTableProps = {
  players: TenPlayersRecord<Player>;
  isRolesVisible?: boolean;
};

export const GameTable = ({ players, isRolesVisible = false }: GameTableProps) => {
  return (
    <View className="flex-1 px-6">
      <View className="flex-row justify-between mx-[60px]">
        <GamePlayer num={5} role="citizen" isRoleVisible={isRolesVisible} nickname={players[5].nickname} />
        <GamePlayer num={6} role="sheriff" isRoleVisible={isRolesVisible} nickname={players[6].nickname} />
      </View>

      <View className="flex-row justify-between mt-4">
        <GamePlayer num={4} role="mafia" isRoleVisible={isRolesVisible} nickname={players[4].nickname} />
        <GamePlayer num={7} role="citizen" isRoleVisible={isRolesVisible} nickname={players[7].nickname} />
      </View>

      <View className="flex-row justify-between mt-4">
        <GamePlayer num={3} role="citizen" isRoleVisible={isRolesVisible} nickname={players[3].nickname} />
        <GamePlayer num={8} role="citizen" isRoleVisible={isRolesVisible} nickname={players[8].nickname} />
      </View>

      <View className="flex-row justify-between mt-4">
        <GamePlayer num={2} role="mafia" isRoleVisible={isRolesVisible} nickname={players[2].nickname} />
        <GamePlayer num={9} role="citizen" isRoleVisible={isRolesVisible} nickname={players[9].nickname} />
      </View>

      <View className="flex-row justify-between mt-4 mx-[60px]">
        <GamePlayer num={1} role="don" isRoleVisible={isRolesVisible} nickname={players[1].nickname} />
        <GamePlayer num={10} role="citizen" isRoleVisible={isRolesVisible} nickname={players[10].nickname} />
      </View>
    </View>
  );
};
