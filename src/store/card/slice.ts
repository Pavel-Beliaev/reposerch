import { createSlice } from '@reduxjs/toolkit';
import { CardSliceState } from './types';
import { fetchCard } from './asyncActions';
import { RootState } from '../store';

const initialState: CardSliceState = {
  card: {
    name: '',
    owner: {
      login: '',
      avatar_url: '',
      html_url: '',
    },
    updated_at: '',
    stargazers_count: 0,
    language: '',
  },
  status: 'pending',
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCard.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCard.fulfilled, (state, action) => {
      state.status = 'finish';
      state.card = action.payload;
    });
    builder.addCase(fetchCard.rejected, (state) => {
      state.status = 'error';
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = cardSlice.actions;
export const cardStateSlice = (state: RootState) => state.card;
export default cardSlice.reducer;
