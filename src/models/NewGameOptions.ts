import { GameType } from './GameType';
import { Player } from './Player';
import { TenPlayersRecord } from './TenPlayersRecord';

export type NewGameOptions = {
  master: Player;
  players?: TenPlayersRecord<Player>;
  gameType?: GameType;
  freeSitTimeMs: number;
};
