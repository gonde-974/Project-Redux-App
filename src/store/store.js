// Konfigurecija na reducer od fajlot userSlice.js STEP.2
import userSlice from './userSlice'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        userStore : userSlice
    }
})

export default store;


