import { GameFullInfo } from './GameFullInfo';

export type GameRecord = Pick<GameFullInfo, 'id' | 'datetime' | 'duration' | 'gameType' | 'winner'>;
