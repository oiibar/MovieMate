import { useQuery } from "@tanstack/react-query";
import {
  fetchMovieDetails,
  fetchMovieVideo,
  fetchSimilarMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  searchMovies,
} from "@/api/movies";
import { Movie, MoviesResponse, MovieVideo } from "@/api/types";

export const useTopRatedMovies = (page: number = 1) => {
  return useQuery<Movie[], Error>({
    queryKey: ["topRatedMovies", page],
    queryFn: () => fetchTopRatedMovies(page),
    staleTime: 1000 * 60 * 60,
  });
};

export const useTrendingMovies = (page: number = 1) => {
  return useQuery<Movie[], Error>({
    queryKey: ["trendingMovies", page],
    queryFn: () => fetchTrendingMovies(page),
    staleTime: 1000 * 60 * 60,
  });
};

export const useMovieDetails = (id: number) => {
  return useQuery<Movie, Error>({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id),
    staleTime: 1000 * 60 * 60,
  });
};

export const useMovieVideo = (id: number) => {
  return useQuery<MovieVideo, Error>({
    queryKey: ["movieVideo", id],
    queryFn: () => fetchMovieVideo(id),
    staleTime: 1000 * 60 * 60,
  });
};

export const useSearchMovies = (query: string, page: number = 1) => {
  return useQuery<MoviesResponse, Error>({
    queryKey: ["searchMovies", query, page],
    queryFn: () => searchMovies(query, page),
    staleTime: 1000 * 60 * 60,
  });
};

export const useSimilarMovies = (movie_id: number, page: number = 1) => {
  return useQuery<MoviesResponse, Error>({
    queryKey: ["similarMovies", movie_id, page],
    queryFn: () => fetchSimilarMovies(movie_id, page),
    staleTime: 1000 * 60 * 60,
  });
};
