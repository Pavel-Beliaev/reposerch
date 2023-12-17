import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {FetchData, FetchParamsType} from "./types";

export const fetchRepoSearch = createAsyncThunk<FetchData, FetchParamsType>(
    'repositories/fetchRepoSearch',
    async (params) => {
        const {query, page} = params;
        const {data} = await axios.get<FetchData>(
            `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=10`
        );
        return data;
    },
);