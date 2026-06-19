import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/auth-thunk/AuthSlice'
import RestaurantSlice from './features/restdata-thunk/RestdataSlice'

export const store=configureStore({
    reducer:{
        auth:authSlice,
        restSlice:RestaurantSlice
    }
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>; //inside useSelector
export type AppDispatch = AppStore['dispatch']; //dispatch action