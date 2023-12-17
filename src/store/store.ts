import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import repositories from './repositories/slice';
import card from './card/cardSLice';

export const store = configureStore({
    reducer: {
        repositories,
        card,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type  AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;