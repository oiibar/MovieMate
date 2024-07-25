// src/store/moviesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesResponse } from "@/api/types";

interface MoviesState {
  topRatedMovies: MoviesResponse["results"];
  trendingMovies: MoviesResponse["results"];
}

const initialState: MoviesState = {
  topRatedMovies: [],
  trendingMovies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setTopRatedMovies(state, action: PayloadAction<MoviesResponse["results"]>) {
      state.topRatedMovies = action.payload;
    },
    setTrendingMovies(state, action: PayloadAction<MoviesResponse["results"]>) {
      state.trendingMovies = action.payload;
    },
  },
});

export const { setTopRatedMovies, setTrendingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
