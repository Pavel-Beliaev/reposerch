import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import repositories from './repoSlice';

export const store = configureStore({
    reducer: {
        repositories,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type  AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;