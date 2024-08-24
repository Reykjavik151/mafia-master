import { Player } from './Player';
import { PlayerRole } from './PlayerRole';
import { TenPlayersRecord } from './TenPlayersRecord';

export type CurrentGame = {
  master: Player;
  players: TenPlayersRecord<Player>;
  roles: TenPlayersRecord<PlayerRole>;
};
