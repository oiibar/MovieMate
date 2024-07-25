// src/hooks/useMovies.ts

import { useQuery } from "@tanstack/react-query";
import { fetchTopRatedMovies } from "@/api/movies";
import { MoviesResponse } from "@/api/types";

export const useTopRatedMovies = () => {
  return useQuery<MoviesResponse, Error>({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });
};
