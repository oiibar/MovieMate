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

export const useTopRatedMovies = () => {
  return useQuery<Movie[], Error>({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });
};

export const useTrendingMovies = () => {
  return useQuery<Movie[], Error>({
    queryKey: ["trendingMovies"],
    queryFn: fetchTrendingMovies,
  });
};

export const useMovieDetails = (id: number) => {
  return useQuery<Movie, Error>({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id),
  });
};

export const useMovieVideo = (id: number) => {
  return useQuery<MovieVideo, Error>({
    queryKey: ["movieVideo", id],
    queryFn: () => fetchMovieVideo(id),
  });
};

export const useSearchMovies = (query: string) => {
  return useQuery<MoviesResponse, Error>({
    queryKey: ["searchMovies", query],
    queryFn: () => searchMovies(query),
  });
};

export const useSimilarMovies = (movie_id: number) => {
  return useQuery<MoviesResponse, Error>({
    queryKey: ["similarMovies", movie_id],
    queryFn: () => fetchSimilarMovies(movie_id),
  });
};
