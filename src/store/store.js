import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authslice'

const store = configureStore({
    reducer: {
        auth : authSlice,
        // Define your slices here
    }
});


export default store;