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

}

type RepositoriesDataType = {
    created_at: string,
    html_url: string,
    name: string,
    stargazers_count: number,
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
}

const initialState: RepoSliceState = {
    repositories: [],
    totalCount: 0,
    status: "pending",
    page: 1
};

export const repoSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
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
        });
        builder.addCase(fetchRepoSearch.rejected, (state) => {
            state.status = 'error';
        });
    },
});

export const {setPage} = repoSlice.actions
export const selectRepo = (state: RootState) => state.repositories
export default repoSlice.reducer
