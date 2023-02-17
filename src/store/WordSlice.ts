import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface WordState {
  value: number;
}

const initialState: WordState[] = [];

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<WordState>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addWord} = wordSlice.actions;

export default wordSlice.reducer;
