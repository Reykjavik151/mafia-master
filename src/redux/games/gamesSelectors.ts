import type { RootState } from '../store';

export const selectGameRecords = (state: RootState) => state.games.gameRecords;
