import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import restaurantClient from "../../services/restaurantClient";

export const fetchRestData=createAsyncThunk<RestData[]>(
    'restaurant/details',
    async (_,thunk)=>{
        try{
            const response=await restaurantClient('/restaurants?lat=28.7040592&lng=77.10249019999999');
            console.log('REST:',response.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
             
            return response.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        }catch(err){
            return thunk.rejectWithValue('could not fetched data')
        }
    }
)

export type RestData={
    info:{
        areaName:string,
        avgRating:number,
        cloudinaryImageId:string,
        cuisines:string[],
        id:string,
        name:string,
        sla:{
            slaString:string,
        },
        locality:string,
    }
}

type InitialState={
    restaurantData:null|RestData[],
    loading:boolean,
    error:unknown|string,
}

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




