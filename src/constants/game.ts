import { GamePhase } from '#models/GamePhase';

export const INITIAL_NIGHT_PHASE: readonly GamePhase[] = [
  'role-selection',
  'mafia-discuss',
  'sheriff-time',
  'free-sit-time',
];

export const ZERO_DAY_PHASE: readonly GamePhase[] = ['day', 'day:voting', 'day:last-minute'];

export const FIRST_NIGHT_PHASE: readonly GamePhase[] = ['night:mafia-shoot', 'night:don', 'night:sheriff', 'best-move'];

export const DAY_PHASE: readonly GamePhase[] = ['day:last-minute', 'day', 'day:voting', 'day:last-minute'];

export const NEXT_PHASES: Record<string, string> = {
  NIGHT: 'Night',
  DAY: 'Day',
};
