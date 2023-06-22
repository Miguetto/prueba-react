import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entries: [],
};

export const seriesSlice = createSlice({
    name : "series",
    initialState,
    reducers: {
        setSeries: ( state, action ) => {
            state.entries = action.payload.entries
                .filter(serie => serie.releaseYear >= 2010 && serie.programType === 'series')
                .slice(0, 20)
                .sort((a, b) => a.title.localeCompare(b.title));
        }
    }
});

export const { setSeries } = seriesSlice.actions;
export default seriesSlice.reducer;