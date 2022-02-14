import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API } from "../api/api"


const initialState = {
    depatures: [],
    loading: true,
    error: false
}

export const fetchAirportDepatures = createAsyncThunk('depaturesSlice/FetchDepatures', async () => {
    const response = await API.getAiportDepatures();
    return response;
})

const options = {
    name: 'depaturesSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAirportDepatures.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchAirportDepatures.fulfilled, (state, action) => {
            state.depatures = action.payload
            state.loading = false;
            state.error = false;
        })
        builder.addCase(fetchAirportDepatures.rejected, (state, action) => {
            console.log('rejected depatures request')
            state.loading = false;
            state.error = true;
        })
    }
}


export const selectDepatures = state => state.depatures.depatures;
export const selectDepaturesLoading = state => state.depatures.loading;
export const selectDepaturesError = state => state.depatures.error;

const depaturesSlice = createSlice(options);

export default depaturesSlice.reducer;