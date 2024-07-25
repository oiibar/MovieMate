// src/hooks/useMovies.ts
import { useQuery } from "@tanstack/react-query";
import {
  fetchMovieDetails,
  fetchSimilarMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  searchMovies,
} from "@/api/movies";
import { Movie, MoviesResponse } from "@/api/types";

export const useTopRatedMovies = () => {
  return useQuery<MoviesResponse, Error>({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });
};

export const useTrendingMovies = () => {
  return useQuery<MoviesResponse, Error>({
    queryKey: ["trendingMovies"],
    queryFn: fetchTrendingMovies,
  });
};

// Hook to fetch details of a specific TV show by ID
export const useMovieDetails = (id: number) => {
  return useQuery<Movie, Error>({
    queryKey: ["TVShowDetails", id],
    queryFn: () => fetchMovieDetails(id),
  });
};

// Hook to search TV shows by query
export const useSearchMovies = (query: string) => {
  return useQuery<MoviesResponse, Error>({
    queryKey: ["searchMovies", query],
    queryFn: () => searchMovies(query),
  });
};

// Hook to fetch similar TV shows by series ID
export const useSimilarMovies = (movie_id: number) => {
  return useQuery<MoviesResponse, Error>({
    queryKey: ["similarMovies", movie_id],
    queryFn: () => fetchSimilarMovies(movie_id),
  });
};
