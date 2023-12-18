import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRepoSearch } from './asyncActions';
import { RepoSliceState } from './types';
import { RootState } from '../store';

const initialState: RepoSliceState = {
  repositories: [],
  totalCount: 0,
  status: 'pending',
  page: 1,
  error: '',
};

export const repoSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRepoSearch.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchRepoSearch.fulfilled, (state, action) => {
      state.status = 'finish';
      state.repositories = action.payload.items;
      state.totalCount = action.payload.total_count;
      state.error = '';
    });
    builder.addCase(fetchRepoSearch.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    });
  },
});

export const { setPage } = repoSlice.actions;
export const repositoriesStateSLice = (state: RootState) => state.repositories;
export default repoSlice.reducer;
