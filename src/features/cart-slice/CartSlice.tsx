import {createSlice} from "@reduxjs/toolkit";

type CartItem={
    id:number;
    quantity:number;
    defaultPrice?:number,
    price?:number
    description:string,
    imageId:string,
    name:string,
}

type InitialState={
    cartFood:CartItem[];
    count:number;
}

const initialState:InitialState={
    cartFood:[],
    count:0,
}

const cartSlice=createSlice({
    name:"cart",
    initialState,

    reducers:{
        addItems:(state,action)=>{

            const existingItem=state.cartFood.find(
                item=>item.id===action.payload.id
            );

            if(existingItem){
                existingItem.quantity+=1;
            }
            else{
                state.cartFood.push({
                    ...action.payload,
                    quantity:1
                });
            }

            state.count++;
        },

        IncrementItems:(state,action)=>{

            const itemAlready=state.cartFood.find(
                item=>item.id===action.payload.id
            );

            if(itemAlready){
                itemAlready.quantity+=1;
                state.count++;
            }
        },

        DecrementItems:(state,action)=>{

            const itemPresent=state.cartFood.find(
                item=>item.id===action.payload.id
            );

            if(!itemPresent)return;

            if(itemPresent.quantity>1){
                itemPresent.quantity-=1;
            }
            else{
                state.cartFood=state.cartFood.filter(
                    item=>item.id!==action.payload.id
                );
            }

            state.count--;
        },
    }
});

export const{addItems,IncrementItems,DecrementItems}=cartSlice.actions;
export default cartSlice.reducer;