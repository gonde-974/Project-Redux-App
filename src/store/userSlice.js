// 1. create Slice STEP .1

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        user:{}
    },
    reducers:{
        logedUserAction:(state,action)=>{
            console.log(action.payload);
            
            //Zacuvuvanje na podatocite isprateni od formata preku dispatch vo state ,,user,,
            state.user = action.payload;

            //Zacuvuvanje na podatocite isprateni od formata preku dispatch vo Local storage
            localStorage.setItem('redux_user',JSON.stringify(action.payload))


        },

        //Akcija za polnenje na user:{} pri sekoj reload 
        restorUserAction:(state,action)=>{
            console.log(action.payload);
            state.user = action.payload;
        },

        //Akcija za brusenje na user ,,Logout,,
        logoutAction:(state,action)=>{
            state.user={};
            localStorage.removeItem('redux_user');
        }


    }
})

export const {logedUserAction,restorUserAction,logoutAction} = userSlice.actions;

export default userSlice.reducer