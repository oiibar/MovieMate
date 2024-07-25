// movies.ts

import { tmdbClient } from "./tmdbClient";
import { MoviesResponse } from "./types";

export const fetchTopRatedMovies = async (): Promise<MoviesResponse> => {
  const response = await tmdbClient.get("/movie/top_rated");
  return response.data;
};
