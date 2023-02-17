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
      state = state.map(n => {
        if (n.id !== action.payload.id) {
          return n;
        }
        return {...n, level: n.level + 1};
      });
    },
    deleteWord: (state, action) => {
      state.filter(w => {
        return w.id !== action.payload?.id;
      });
    },
  },
});

export const {addWord, modifyLevel, deleteWord} = wordSlice.actions;

export default wordSlice.reducer;
