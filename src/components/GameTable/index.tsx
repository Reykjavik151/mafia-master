import { GamePlayer } from '#components/GamePlayer';
import { Player } from '#models/Player';
import { PlayerRole } from '#models/PlayerRole';
import { TenPlayersRecord } from '#models/TenPlayersRecord';
import { Nullable } from '#types/Nullable';
import React from 'react';
import { View } from 'react-native';

type GameTableProps = {
  players: TenPlayersRecord<Player>;
  roles: TenPlayersRecord<Nullable<PlayerRole>>;
  isRolesVisible?: boolean;
};

export const GameTable = ({ players, roles, isRolesVisible = false }: GameTableProps) => {
  return (
    <View className="flex-1 px-6">
      <View className="flex-row justify-between mx-[60px]">
        <GamePlayer num={5} role={roles[5]} isRoleVisible={isRolesVisible} nickname={players[5].nickname} />
        <GamePlayer num={6} role={roles[6]} isRoleVisible={isRolesVisible} nickname={players[6].nickname} />
      </View>

      <View className="flex-row justify-between mt-4">
        <GamePlayer num={4} role={roles[4]} isRoleVisible={isRolesVisible} nickname={players[4].nickname} />
        <GamePlayer num={7} role={roles[7]} isRoleVisible={isRolesVisible} nickname={players[7].nickname} />
      </View>

      <View className="flex-row justify-between mt-4">
        <GamePlayer num={3} role={roles[3]} isRoleVisible={isRolesVisible} nickname={players[3].nickname} />
        <GamePlayer num={8} role={roles[8]} isRoleVisible={isRolesVisible} nickname={players[8].nickname} />
      </View>

      <View className="flex-row justify-between mt-4">
        <GamePlayer num={2} role={roles[2]} isRoleVisible={isRolesVisible} nickname={players[2].nickname} />
        <GamePlayer num={9} role={roles[9]} isRoleVisible={isRolesVisible} nickname={players[9].nickname} />
      </View>

      <View className="flex-row justify-between mt-4 mx-[60px]">
        <GamePlayer num={1} role={roles[1]} isRoleVisible={isRolesVisible} nickname={players[1].nickname} />
        <GamePlayer num={10} role={roles[10]} isRoleVisible={isRolesVisible} nickname={players[10].nickname} />
      </View>
    </View>
  );
};
