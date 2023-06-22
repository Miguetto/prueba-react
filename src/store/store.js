import { configureStore } from '@reduxjs/toolkit';

import peliculasReducer from "./slices/peliculasSlice";
import seriesReducer from "./slices/seriesSlice";

export const store = configureStore({
  reducer: {
    peliculas: peliculasReducer,
    series: seriesReducer,
  },
});