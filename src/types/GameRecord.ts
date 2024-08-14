import type { CircleNumber } from './CircleNumber';
import type { Player } from './Player';
import type { PlayerNumber } from './PlayerNumber';
import { PlayerRole, PlayerTeamRole } from './PlayerRole';
import { TenPlayersRecord } from './TenPlayersRecord';
import type { GameType } from './GameType';
import { GamePlayerScoreResult } from './GamePlayerScoreResult';

type GameRecordID = number;

export type GameRecord = {
  id: GameRecordID;
  datetime: string;
  duration: number;
  // TODO: series fields
  gameType: GameType;
  winner: PlayerTeamRole | 'draw';

  master: Player;
  players: TenPlayersRecord<PlayerNumber>;
  roles: TenPlayersRecord<PlayerRole>;

  // firstKilled: 10;
  // bestMove: [3, 5, 7];
  firstKilled: PlayerNumber;
  bestMove: [PlayerNumber, PlayerNumber, PlayerNumber];

  // voting: { 0:
  //    firstVoting: { 3: [1, 2, 3, 4, 5], 5: [], 7: [6, 7, 8, 9, 10] }
  //    secondVoting: { 3: [1, 2, 3, 4, 5], 7: [6, 7, 8, 9, 10] }
  //    eliminatedPlayers: [3, 7] | [],
  voting: Record<
    CircleNumber,
    {
      firstVoting: Record<PlayerNumber, PlayerNumber[]>;
      secondVoting: Record<PlayerNumber, PlayerNumber[]>;
      eliminatedPlayers: PlayerNumber[];
    }
  >;

  fouls: TenPlayersRecord<PlayerNumber>;

  score: TenPlayersRecord<GamePlayerScoreResult>;

  notes: string[];
};
