import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPizzas = createAsyncThunk<any,any>(
    'repositories/fetchRepoSearch',
    async (params) => {
        const {sortBy, order, category, search, page} = params
        const {data} = await axios.get<any>(
            `https://`
        )
        return data;
    }
)

interface RepoSliceState {
    repo: any[],
}

const initialState: RepoSliceState = {
    repo: [],
}

export const repoSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
})

export const {} = repoSlice.actions

export default repoSlice.reducer
