import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GameRecord } from '#models/GameRecord';

type GamesState = {
  gameRecords: GameRecord[];
};

const INITIAL_STATE: GamesState = {
  gameRecords: [
    {
      id: 1,
      datetime: new Date().toUTCString(),
      duration: 60 * 60 * 1000,
      gameType: 'lobby',
      winner: 'mafia',

      master: 'Opium',
      players: {
        1: 'Fenix',
        2: 'Marsianka',
        3: 'Jennie',
        4: 'Klay',
        5: 'Kabluk',
        6: 'Adamant',
        7: 'Moment',
        8: 'Ruby',
        9: 'Paddington',
        10: 'Baraban',
      },
      roles: {
        1: 'mafia',
        2: 'mafia',
        3: 'don',
        4: 'sheriff',
        5: 'citizen',
        6: 'citizen',
        7: 'citizen',
        8: 'citizen',
        9: 'citizen',
        10: 'citizen',
      },

      firstKilled: 4,
      bestMove: [1, 2, 3],

      voting: {},

      fouls: {
        1: 2,
        2: 1,
        4: 3,
      },

      score: {
        1: { total: 1, win: 1, additionalTotal: 0, additionalAuto: 0, additionalMinus: 0, additionalPlus: 0 },
        2: { total: 1, win: 1, additionalTotal: 0, additionalAuto: 0, additionalMinus: 0, additionalPlus: 0 },
        3: { total: 1, win: 1, additionalTotal: 0, additionalAuto: 0, additionalMinus: 0, additionalPlus: 0 },
        4: { total: 0.7, win: 0, additionalTotal: 0, additionalAuto: 0, additionalMinus: 0, additionalPlus: 0.7 },
        5: { total: 0, win: 0, additionalTotal: 0, additionalAuto: 0, additionalMinus: 0, additionalPlus: 0 },
        6: { total: 0, win: 0, additionalTotal: 0, additionalAuto: 0, additionalMinus: 0, additionalPlus: 0 },
        7: { total: 0, win: 0, additionalTotal: 0, additionalAuto: 0, additionalMinus: 0, additionalPlus: 0 },
        8: { total: 0, win: 0, additionalTotal: 0, additionalAuto: 0, additionalMinus: 0, additionalPlus: 0 },
        9: { total: 0, win: 0, additionalTotal: 0, additionalAuto: 0, additionalMinus: 0, additionalPlus: 0 },
        10: { total: 0, win: 0, additionalTotal: 0, additionalAuto: 0, additionalMinus: 0, additionalPlus: 0 },
      },

      notes: ['4 записал тройку'],
    },
  ],
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState: INITIAL_STATE,
  reducers: {
    addGameRecord: (state, { payload: newGameRecord }: PayloadAction<GameRecord>) => {
      state.gameRecords = [...state.gameRecords, newGameRecord];
    },
  },
});

export const { addGameRecord } = gamesSlice.actions;

export const gamesReducer = gamesSlice.reducer;
