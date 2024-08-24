import { Player } from '#models/Player';
import { TenPlayersRecord } from '#models/TenPlayersRecord';

export const convertPlayersArrToTenRecord = (players: Player[]): TenPlayersRecord<Player> => {
  return players.reduce((acc, player, index) => {
    const slot = (index + 1) as keyof TenPlayersRecord<Player>;
    acc[slot] = player;
    return acc;
  }, {} as TenPlayersRecord<Player>);
};

export const convertPlayersTenRecordToArr = (players: TenPlayersRecord<Player>): Player[] => Object.values(players);
