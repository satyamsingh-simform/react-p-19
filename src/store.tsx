import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './features/cart-slice/CartSlice';

export const store=configureStore({
    reducer:{
        cart:CartSlice,
    }
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];