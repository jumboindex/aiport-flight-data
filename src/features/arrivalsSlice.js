import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API } from "../api/api"


const initialState = {
    arrivals: [],
    loading: true,
    error: false
}

export const fetchAirportArrivals = createAsyncThunk('arrivalsSlice/FetchArrivals', async () => {
    const response = await API.getAiportArrivals();
    return response;
})

const options = {
    name: 'arrivalsSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAirportArrivals.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchAirportArrivals.fulfilled, (state, action) => {
            state.arrivals = action.payload
            state.loading = false;
            state.error = false;
        })
        builder.addCase(fetchAirportArrivals.rejected, (state, action) => {
            console.log('rejected arrivals request')
            state.loading = false;
            state.error = true;
        })
    }
}


export const selectArrivals = state => state.arrivals.arrivals;
export const selectArrivalsLoading = state => state.arrivals.loading;
export const selectArrivalsError = state => state.arrivals.error;

const arrivalsSlice = createSlice(options);

export default arrivalsSlice.reducer;