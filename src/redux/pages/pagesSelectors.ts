import type { RootState } from '../store';

export const selectLastCreatedPageUri = (state: RootState) => state.pages.lastCreatedPageUri;
