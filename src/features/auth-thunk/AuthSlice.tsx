import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authClient from "../../services/authClient";
import type { InitialState, LoginCredentials, User } from "../../utils/authThunkType";

export const fetchUserData=createAsyncThunk<User,LoginCredentials,{ rejectValue:string }>(
    'auth/login',
    async(loginData,thunk)=>{
        try{
            const response=await authClient.post('/login',loginData);
            localStorage.setItem("TOKEN:",JSON.stringify(response.data.accessToken))
            return response.data;
        }catch(err:any){
            return thunk.rejectWithValue('login failed');
        }
    }
)

export const authCheck=createAsyncThunk<User,string, {rejectValue:string}>(
    'auth/check',
    async (token,thunk)=>{
        console.log('authCheck call made',token);
        try{
            const response=await authClient.get('/me',{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            return response.data;
        }catch(err){
            return thunk.rejectWithValue('token expired')
        }
    }
)

const initialState:InitialState={
    user:null,
    isAuthenticated:false,
    loading:false,
    error:null,
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:(state)=>{
            state.isAuthenticated=false;
            state.user=null;
            state.loading=false;
            state.error=null;
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchUserData.pending,(state)=>{
                state.loading=true;
                state.error=null;
            })
            .addCase(fetchUserData.fulfilled,(state,action)=>{
                state.loading=false;
                state.error=null;
                state.user=action.payload;
                state.isAuthenticated=true;
            })
            .addCase(fetchUserData.rejected,(state,action)=>{
                state.error=action.payload || 'login failed';
                state.isAuthenticated=false;
            })

            //authCheck
            .addCase(authCheck.pending,(state)=>{
                state.loading=true;
            })
            .addCase(authCheck.fulfilled,(state,action)=>{
                state.loading=false;
                state.isAuthenticated=true;
                state.user=action.payload;
            })
            .addCase(authCheck.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload || 'token expired';
                state.user=null;
                state.isAuthenticated=false
            })
    }
})

export const {logout} =authSlice.actions
export default authSlice.reducer;