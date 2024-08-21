import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Nullable } from '#types/Nullable';
import { CurrentGame } from '#models/CurrentGame';
import { NewGameOptions } from '#models/NewGameOptions';

type CurrentGameState = {
  newGameOptions: Nullable<NewGameOptions>;
  currentGame: Nullable<CurrentGame>;
};

const INITIAL_STATE: CurrentGameState = {
  newGameOptions: null,
  currentGame: null,
};

export const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState: INITIAL_STATE,
  reducers: {
    addNewGameOptions: (state, { payload: newGameRecord }: PayloadAction<Partial<NewGameOptions>>) => {},
    resetNewGameOptions: (state) => {
      state.newGameOptions = null;
    },

    addCurrentGameInfo: (state, { payload: newCurrentGameInfo }: PayloadAction<Partial<CurrentGame>>) => {
      state.currentGame = {
        ...state.currentGame,
        ...newCurrentGameInfo,
      };
    },
    resetCurrentGameInfo: (state) => {
      state.currentGame = null;
    },
  },
});

export const { addCurrentGameInfo, resetCurrentGameInfo, addNewGameOptions, resetNewGameOptions } =
  currentGameSlice.actions;

export const currentGameReducer = currentGameSlice.reducer;
