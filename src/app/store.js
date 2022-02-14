import { configureStore } from "@reduxjs/toolkit";
import arrivalsSlice from "../features/arrivalsSlice";
import depaturesSlice from "../features/depaturesSlice";

const store = configureStore({
    reducer: {
        arrivals: arrivalsSlice,
        depatures: depaturesSlice
    }
})

export default store