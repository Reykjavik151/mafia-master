import { CurrentGame } from '#models/CurrentGame';
import { GameDayPhase, GamePhaseStep } from '#models/GamePhase';

export const INITIAL_NIGHT_PHASE: readonly GamePhaseStep[] = [
  'role-selection',
  'mafia-discuss',
  'sheriff-time',
  'free-sit-time',
];

export const ZERO_DAY_PHASE: readonly GamePhaseStep[] = ['day:speech', 'day:voting', 'day:last-minute'];

export const FIRST_NIGHT_PHASE: readonly GamePhaseStep[] = [
  'night:mafia-shoot',
  'night:don',
  'night:sheriff',
  'best-move',
];

export const DAY_PHASE: readonly GamePhaseStep[] = ['day:last-minute', 'day:speech', 'day:voting', 'day:last-minute'];

export const NEXT_PHASES: Record<GameDayPhase, string> = {
  night: 'Night',
  day: 'Day',
};

export const INITIAL_CURRENT_GAME_VALUES: Partial<CurrentGame> = {
  circleNumber: 0,
  dayPhase: 'night',
  roles: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
  },
  phases: INITIAL_NIGHT_PHASE.slice(),
  currentPhaseInfo: { phase: 'role-selection' },
};
