export type GameDayPhase = 'day' | 'night';

export type GamePhaseStep =
  | 'role-selection'
  | 'mafia-discuss'
  | 'sheriff-time'
  | 'free-sit-time'
  | 'day:speech'
  | 'day:voting'
  | 'day:last-minute'
  | 'night:mafia-shoot'
  | 'night:don'
  | 'night:sheriff'
  | 'best-move'
  | 'game-over';
