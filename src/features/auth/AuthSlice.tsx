import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../services/axiosClient";

type User={
  "id":number,
  "username":string,
  "email":string,
  "firstName":string,
  "lastName":string,
  "gender":string,
  "image":string,
  "accessToken":string, // JWT accessToken (for backward compatibility) in response and cookies
  "refreshToken":string // refreshToken in response and cookies
}
type LoginCredentials={
    username:string;
    password:string;
}
export const loginUser=createAsyncThunk<User,LoginCredentials,{ rejectValue:unknown }>('auth/login',async(loginData,thunk)=>{
        try{
            const response=await axiosClient.post('/login',loginData);
            console.log('data-->',response.data);
            
            return response.data;
        }catch(err){
            thunk.rejectWithValue(err)
        }
    }
)

type InitialState={
    user:User|null,
    isAuthenticated:boolean,
    loading:boolean,
    error:unknown|null,
}

const initialState:InitialState={
    user:null,
    isAuthenticated:false,
    loading:false,
    error:null,
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(loginUser.pending,(state)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(loginUser.fulfilled,(state,action)=>{
                state.loading=false;
                state.error=null;
                state.user=action.payload;
                state.isAuthenticated=true;
            })
            .addCase(loginUser.rejected,(state,action)=>{
                state.error=action.payload;
                state.isAuthenticated=false;
            })
    }
})

export default authSlice.reducer;