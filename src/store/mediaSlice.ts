// src/store/moviesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesResponse, TVShowResponse } from "@/api/types";

interface MediaState {
  topRatedMovies: MoviesResponse["results"];
  trendingMovies: MoviesResponse["results"];
  trendingTVShows: TVShowResponse["results"];
  topRatedTVShows: TVShowResponse["results"];
}

const initialState: MediaState = {
  topRatedMovies: [],
  trendingMovies: [],
  trendingTVShows: [],
  topRatedTVShows: [],
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setTopRatedMovies(state, action: PayloadAction<MoviesResponse["results"]>) {
      state.topRatedMovies = action.payload;
    },
    setTrendingMovies(state, action: PayloadAction<MoviesResponse["results"]>) {
      state.trendingMovies = action.payload;
    },
    setTrendingTVShows(
      state,
      action: PayloadAction<TVShowResponse["results"]>
    ) {
      state.trendingTVShows = action.payload;
    },
    setTopRatedTVShows(
      state,
      action: PayloadAction<TVShowResponse["results"]>
    ) {
      state.topRatedTVShows = action.payload;
    },
  },
});

export const { setTopRatedMovies, setTrendingMovies } = mediaSlice.actions;

export default mediaSlice.reducer;
