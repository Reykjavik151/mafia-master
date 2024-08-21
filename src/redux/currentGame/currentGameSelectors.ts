import type { RootState } from '../store';

export const selectCurrentGame = (state: RootState) => state.currentGame.currentGame;

export const selectNewGameOptions = (state: RootState) => state.currentGame.newGameOptions;
