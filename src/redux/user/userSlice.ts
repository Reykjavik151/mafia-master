import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Nullable } from '#types/Nullable';
import { Player } from '#models/Player';

type UserState = {
  user: Nullable<Player>;
  // TODO: token?
};

const INITIAL_STATE: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, { payload: user }: PayloadAction<Nullable<Player>>) => {
      state.user = user;
    },
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
