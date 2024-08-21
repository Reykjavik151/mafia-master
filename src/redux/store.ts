import { configureStore } from '@reduxjs/toolkit';

import { gamesReducer } from './games/gamesSlice';
import { userReducer } from './user/userSlice';
import { currentGameReducer } from './currentGame/currentGameSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    currentGame: currentGameReducer,
    games: gamesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
