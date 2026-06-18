import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/auth/AuthSlice'

export const store=configureStore({
    reducer:{
        auth:authSlice,
    }
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>; //inside useSelector
export type AppDispatch = AppStore['dispatch']; //dispatch action