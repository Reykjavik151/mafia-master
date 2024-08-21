import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GameRecord } from '#models/GameRecord';
import { GameFullInfo, GameID } from '#models/GameFullInfo';
import {
  ADAMANT_PLAYER_DUMMY,
  BARABAN_PLAYER_DUMMY,
  FENIX_PLAYER_DUMMY,
  JENNIE_PLAYER_DUMMY,
  KABLUK_PLAYER_DUMMY,
  KLAY_PLAYER_DUMMY,
  MARSIANKA_PLAYER_DUMMY,
  MOMENT_PLAYER_DUMMY,
  OPIUM_PLAYER_DUMMY,
  PADDINGTON_PLAYER_DUMMY,
  RUBY_PLAYER_DUMMY,
} from '#models/dummy/players.dummy';

type GamesState = {
  // Short info about games for dashboard
  gameRecords: GameRecord[];
  // Full info about games for game details
  gameInfos: Record<GameID, GameFullInfo>;
};

const INITIAL_STATE: GamesState = {
  gameRecords: [
    {
      id: 1,
      datetime: new Date().toUTCString(),
      duration: 60 * 60 * 1000,
      gameType: 'lobby',
      master: OPIUM_PLAYER_DUMMY,
    },
    {
      id: 2,
      datetime: new Date().toUTCString(),
      duration: 60 * 60 * 1000,
      gameType: 'lobby',
      master: OPIUM_PLAYER_DUMMY,
    },
  ],
  gameInfos: {
    1: {
      id: 1,
      datetime: new Date().toUTCString(),
      duration: 60 * 60 * 1000,
      gameType: 'lobby',
      winner: 'mafia',

      master: OPIUM_PLAYER_DUMMY,
      players: {
        1: FENIX_PLAYER_DUMMY,
        2: MARSIANKA_PLAYER_DUMMY,
        3: JENNIE_PLAYER_DUMMY,
        4: KABLUK_PLAYER_DUMMY,
        5: KLAY_PLAYER_DUMMY,
        6: MOMENT_PLAYER_DUMMY,
        7: RUBY_PLAYER_DUMMY,
        8: PADDINGTON_PLAYER_DUMMY,
        9: BARABAN_PLAYER_DUMMY,
        10: ADAMANT_PLAYER_DUMMY,
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
  },
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
