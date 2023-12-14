import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPizzas = createAsyncThunk<any,any>(
    'repositories/fetchRepoSearch',
    async (params) => {
        const {query} = params
        const {data} = await axios.get<any>(
            `https://api.github.com/search/repositories?q=${query}&per_page=10`
        )
        return data;
    }
)

interface RepoSliceState {
    repositories: any,
}

const initialState: RepoSliceState = {
    repositories: {

    },
}

export const repoSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
})

export const {} = repoSlice.actions

export default repoSlice.reducer
