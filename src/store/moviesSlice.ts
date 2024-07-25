// src/store/moviesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "@/api/types";

interface MoviesState {
  topRatedMovies: Movie[];
  trendingMovies: Movie[];
}

const initialState: MoviesState = {
  topRatedMovies: [],
  trendingMovies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setTopRatedMovies(state, action: PayloadAction<Movie[]>) {
      state.topRatedMovies = action.payload;
    },
    setTrendingMovies(state, action: PayloadAction<Movie[]>) {
      state.trendingMovies = action.payload;
    },
  },
});

export const { setTopRatedMovies, setTrendingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
