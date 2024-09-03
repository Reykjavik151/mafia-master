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
