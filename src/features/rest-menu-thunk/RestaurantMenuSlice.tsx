import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import restaurantClient from "../../services/restaurantClient";
import type { InitialState, RestMenu } from "../../utils/restMenuType";

export const fetchRestMenuData=createAsyncThunk<RestMenu,string>(
    'restaurant/menu',
    async(id,thunk)=>{
        try{
            const response=await restaurantClient(`/menu?lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`);
            console.log('RESPONSE-->',response.data.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            return response.data.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        }catch(err){
            return thunk.rejectWithValue('failed')
        }
    }
)

const initialState:InitialState={
    RestaurantMenu:null,
    loading:false,
    error:null,
}

const RestaurantMenuSlice =createSlice({
    name:'restMenu',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchRestMenuData.pending,(state)=>{
                state.loading=true;
            })
            .addCase(fetchRestMenuData.fulfilled,(state,action)=>{
                state.loading=false;
                state.RestaurantMenu=action.payload;
            })
            .addCase(fetchRestMenuData.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            })
    }
})

export default RestaurantMenuSlice.reducer;