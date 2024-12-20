import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTime: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        settravelTime: (state, action) => {
            state.travelTime = action.payload;
        },
    }
});

export const { setOrigin, setDestination, settravelTime } = navSlice.actions;

//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTime = (state) => state.nav.travelTime;

export default navSlice.reducer