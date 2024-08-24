import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CurrentGame } from '#models/CurrentGame';
import { NewGameOptions } from '#models/NewGameOptions';

type CurrentGameState = {
  newGameOptions: Partial<NewGameOptions>;
  currentGame: Partial<CurrentGame>;
};

const INITIAL_STATE: CurrentGameState = {
  newGameOptions: {},
  currentGame: {},
};

export const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState: INITIAL_STATE,
  reducers: {
    addNewGameOptions: (state, { payload: newGameOptions }: PayloadAction<Partial<NewGameOptions>>) => {
      if (!state.newGameOptions) {
        state.newGameOptions = newGameOptions;
        return;
      }

      state.newGameOptions = {
        ...state.newGameOptions,
        ...newGameOptions,
      };
    },
    resetNewGameOptions: (state) => {
      state.newGameOptions = {};
    },

    addCurrentGameInfo: (state, { payload: newCurrentGameInfo }: PayloadAction<Partial<CurrentGame>>) => {
      state.currentGame = {
        ...state.currentGame,
        ...newCurrentGameInfo,
      };
    },
    resetCurrentGameInfo: (state) => {
      state.currentGame = {};
    },

    startGame: (state) => {
      state.currentGame = state.newGameOptions;
    },
  },
});

export const { addCurrentGameInfo, resetCurrentGameInfo, addNewGameOptions, startGame, resetNewGameOptions } =
  currentGameSlice.actions;

export const currentGameReducer = currentGameSlice.reducer;
