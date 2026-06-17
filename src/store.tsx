import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/auth/AuthSlice'

export const store=configureStore({
    reducer:{
        auth:authSlice,
    }
})

export type AuthSliceType=ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;