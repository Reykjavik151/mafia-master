export type GamePhase =
  | 'role-selection'
  | 'mafia-discuss'
  | 'sheriff-time'
  | 'free-sit-time'
  | 'day'
  | 'day:voting'
  | 'day:last-minute'
  | 'night:mafia-shoot'
  | 'night:don'
  | 'night:sheriff'
  | 'best-move'
  | 'game-over';
