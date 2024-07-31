import { tmdbClient } from "./tmdbClient";
import { Movie, MoviesResponse, MovieVideo } from "./types";

export const fetchTopRatedMovies = async (
  page: number = 1
): Promise<Movie[]> => {
  const response = await tmdbClient.get("movie/top_rated", {
    params: { page },
  });
  return response.data.results;
};

export const fetchTrendingMovies = async (
  page: number = 1
): Promise<Movie[]> => {
  const response = await tmdbClient.get("trending/movie/day", {
    params: { page },
  });
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

export const searchMovies = async (
  query: string,
  page: number = 1
): Promise<MoviesResponse> => {
  const response = await tmdbClient.get("search/movie", {
    params: { query, page },
  });
  return response.data;
};

export const fetchSimilarMovies = async (
  movie_id: number,
  page: number = 1
): Promise<MoviesResponse> => {
  const response = await tmdbClient.get(`movie/${movie_id}/similar`, {
    params: { page },
  });
  return response.data;
};
