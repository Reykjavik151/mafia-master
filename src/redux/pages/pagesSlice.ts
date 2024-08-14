import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Nullable } from '#types/Nullable';

interface PagesState {
  creationOptions: {
    title?: string;
    imageUri?: string;
    pageNumber?: number;
  };
  lastCreatedPageUri: Nullable<string>;
}

const INITIAL_STATE: PagesState = {
  creationOptions: {},
  lastCreatedPageUri: null,
};

export const pagesSlice = createSlice({
  name: 'pages',
  initialState: INITIAL_STATE,
  reducers: {
    addCreationOptions: (state, { payload }: PayloadAction<Partial<PagesState['creationOptions']>>) => {
      state.creationOptions = {
        ...state.creationOptions,
        ...payload,
      };
    },
    resetCreationOptions: (state) => {
      state.creationOptions = {};
    },
    setCreatedPage: (state, { payload: newPageUri }: PayloadAction<string>) => {
      state.lastCreatedPageUri = newPageUri;
    },
  },
});

export const { addCreationOptions, resetCreationOptions, setCreatedPage } = pagesSlice.actions;

export const pagesReducer = pagesSlice.reducer;
