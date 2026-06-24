import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import restaurantClient from "../../services/restaurantClient";
import type { InitialState, RestData } from "../../utils/restdataThunkType";

export const fetchRestData=createAsyncThunk<RestData[]>(
    'restaurant/details',
    async (_,thunk)=>{
        try{
            const response=await restaurantClient('/restaurants?lat=28.7040592&lng=77.10249019999999');
            return response.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        }catch(err){
            return thunk.rejectWithValue('could not fetched data')
        }
    }
)

const initialState:InitialState={
    restaurantData:null,
    loading:false,
    error:null,
}

const RestaurantSlice=createSlice({
    name:'restSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchRestData.pending,(state)=>{
                state.loading=true;
            })
            .addCase(fetchRestData.fulfilled,(state,action)=>{
                state.loading=false;
                state.restaurantData=action.payload;
            })
            .addCase(fetchRestData.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            })
    }
})

export default RestaurantSlice.reducer




