import { Nullable } from '#types/Nullable';
import { CircleNumber } from './CircleNumber';
import { GameFullInfo } from './GameFullInfo';
import { GameDayPhase, GamePhaseStep } from './GamePhase';
import { Player } from './Player';
import { PlayerRole } from './PlayerRole';
import { TenPlayersRecord } from './TenPlayersRecord';

export type CurrentGame = Partial<
  Pick<
    GameFullInfo,
    'datetime' | 'gameType' | 'master' | 'players' | 'firstKilled' | 'bestMove' | 'voting' | 'fouls' | 'notes'
  >
> & {
  circleNumber?: CircleNumber;
  dayPhase?: GameDayPhase;
  phases?: GamePhaseStep[];
  roles?: TenPlayersRecord<Nullable<PlayerRole>>;

  currentPhaseInfo?:
    | { phase: 'role-selection' }
    | { phase: 'mafia-discuss' }
    | { phase: 'sheriff-time' }
    | { phase: 'free-sit-time' }
    | {
        phase: 'day:speech';
        player: Player;
        playerNumber: number;
        votingCandidates: number[];
      }
    | {
        phase: 'day:voting';
      }
    | {
        phase: 'day:last-minute';
        player: Player;
        playerNumber: number;
      }
    | {
        phase: 'night:mafia-shoot';
        killedPlayer: Nullable<Player>;
        killedPlayerNumber: Nullable<number>;
      }
    | {
        phase: 'night:don';
      }
    | {
        phase: 'night:sheriff';
      }
    | {
        phase: 'best-move';
      }
    | {
        phase: 'game-over';
      };

  selectedPlayer?: Player;
  selectedPlayerNumber?: number;

  timerMs?: number;
};
