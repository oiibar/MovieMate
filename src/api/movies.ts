import { tmdbClient } from "./tmdbClient";
import { Movie, MoviesResponse, MovieVideo } from "./types";

export const fetchTopRatedMovies = async (): Promise<MoviesResponse> => {
  const response = await tmdbClient.get("movie/top_rated");
  return response.data.results;
};
export const fetchTrendingMovies = async (): Promise<MoviesResponse> => {
  const response = await tmdbClient.get("trending/movie/day");
  return response.data.results;
};
export const fetchMovieDetails = async (id: number): Promise<Movie> => {
  const response = await tmdbClient.get(`movie/${id}`);
  return response.data;
};
export const fetchMovieVideo = async (id: number): Promise<MovieVideo> => {
  const response = await tmdbClient.get(`movie/${id}/videos`);
  return response.data;
};
export const searchMovies = async (query: string): Promise<MoviesResponse> => {
  const response = await tmdbClient.get(`search/movie`, {
    params: {
      query,
    },
  });
  return response.data;
};
export const fetchSimilarMovies = async (
  movie_id: number
): Promise<MoviesResponse> => {
  const response = await tmdbClient.get(`movie/${movie_id}/similar`);
  return response.data;
};
