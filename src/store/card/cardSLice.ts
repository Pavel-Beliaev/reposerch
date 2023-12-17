import {createSlice} from '@reduxjs/toolkit';
import {RootState} from "../store";
import {fetchCard} from "./asyncActions";
import {CardSliceState} from "./types";

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
    status: "pending"
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
            state.card = action.payload
        });
        builder.addCase(fetchCard.rejected, (state, action) => {
            state.status = 'error';
        });
    },
});

export const {} = cardSlice.actions;
export const cardStateSlice = (state: RootState) => state.card;
export default cardSlice.reducer;
