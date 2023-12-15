import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import {RootState} from "./store";

type FetchParamsType = {
    query: string,
    page: string,
};

type FetchData = {
    items: RepositoriesDataType[],
    total_count: number,
    error: {
        message: string
    },
};

type RepositoriesDataType = {
    created_at: string,
    html_url: string,
    name: string,
    stargazers_count: number,
    language: string,
    updated_at: string,
    owner: {
        avatar_url: string,
        html_url: string,
        login: string,
    },
};

export const fetchRepoSearch = createAsyncThunk<FetchData, FetchParamsType>(
    'repositories/fetchRepoSearch',
    async (params) => {
        const {query, page} = params;
        const {data} = await axios.get<FetchData>(
            `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=10`
        );
        return data;
    },
)

interface RepoSliceState {
    repositories: RepositoriesDataType[],
    totalCount: number,
    status: 'pending' | 'loading' | 'finish' | 'error',
    page: number,
    error: string | undefined,
}

const initialState: RepoSliceState = {
    repositories: [],
    totalCount: 0,
    status: "pending",
    page: 1,
    error: ''
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
            state.error = ''
        });
        builder.addCase(fetchRepoSearch.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message
        });
    },
});

export const {setPage} = repoSlice.actions;
export const selectRepo = (state: RootState) => state.repositories;
export default repoSlice.reducer;
