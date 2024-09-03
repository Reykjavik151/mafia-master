import { Nullable } from '#types/Nullable';
import { CircleNumber } from './CircleNumber';
import { GameFullInfo } from './GameFullInfo';
import { GameDayPhase, GamePhaseStep } from './GamePhase';
import { Player } from './Player';

export type CurrentGame = Partial<
  Pick<
    GameFullInfo,
    'datetime' | 'gameType' | 'master' | 'players' | 'roles' | 'firstKilled' | 'bestMove' | 'voting' | 'fouls' | 'notes'
  >
> & {
  circleNumber?: CircleNumber;
  dayPhase?: GameDayPhase;
  phases?: GamePhaseStep[];
  currentPhaseStep?: GamePhaseStep;

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
