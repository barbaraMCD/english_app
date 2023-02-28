import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface WordState {
  id: number;
  french: string;
  english: string;
  level: number;
}
const initialState: WordState[] = [];

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<WordState>) => {
      state.push(action.payload);
    },
    modifyLevel: (state, action) => {
      const word = state.find(w => w.id === action.payload.id);
      if (word) {
        word.level += 1;
      }
    },
    deleteWord: (state, action: PayloadAction<WordState>) => {
      return state.filter(w => w.id !== action.payload?.id);
    },
  },
});

export const {addWord, modifyLevel, deleteWord} = wordSlice.actions;

export default wordSlice.reducer;
