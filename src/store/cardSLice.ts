import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "./store";

export interface CardSliceState {
    avatar: string,
    login: string,
    stars: number,
    lastUpdate: string,
    language: string,
    url: string,
};

const initialState: CardSliceState = {
    avatar: '',
    login: '',
    stars: 0,
    lastUpdate: '',
    language: '',
    url: '',
};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCard(state, action: PayloadAction<CardSliceState>) {
            state.avatar = action.payload.avatar
            state.login = action.payload.login
            state.stars = action.payload.stars
            state.lastUpdate = action.payload.lastUpdate
            state.language = action.payload.language
            state.url = action.payload.url
        },
    },
});

export const {setCard} = cardSlice.actions;
export const selectCard = (state: RootState) => state.card;
export default cardSlice.reducer;
