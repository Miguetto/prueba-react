import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entries: [],
};

export const peliculasSlice = createSlice({
    name : "peliculas",
    initialState,
    reducers: {
        setPeliculas: ( state, action ) => {
            state.entries = action.payload.entries
                .filter(pelicula => pelicula.releaseYear >= 2010 && pelicula.programType === 'movie')
                .slice(0, 20)
                .sort((a, b) => a.title.localeCompare(b.title));
        }
    }
});

export const { setPeliculas } = peliculasSlice.actions;
export default peliculasSlice.reducer;