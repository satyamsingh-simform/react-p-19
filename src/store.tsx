import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/auth-thunk/AuthSlice'
import RestaurantSlice from './features/restdata-thunk/RestdataSlice'
import RestaurantMenuSlice from './features/rest-menu-thunk/RestaurantMenuSlice'
import CartSlice from './features/cart-slice/CartSlice';

export const store=configureStore({
    reducer:{
        auth:authSlice,
        restSlice:RestaurantSlice,
        restMenu:RestaurantMenuSlice,
        cart:CartSlice,
    }
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>; //inside useSelector
export type AppDispatch = AppStore['dispatch']; //dispatch action