import { useQuery } from "@tanstack/react-query";
import { TVShow, TVShowResponse } from "@/api/types";
import {
  fetchTopRatedTVShows,
  fetchTrendingTVShows,
  fetchTVShowDetails,
  searchTVShows,
  fetchSimilarTVShows,
} from "@/api/tvShows";

// Hook to fetch top-rated TV shows
export const useTopRatedTVShows = () => {
  return useQuery<TVShowResponse, Error>({
    queryKey: ["topRatedTVShows"],
    queryFn: fetchTopRatedTVShows,
  });
};

// Hook to fetch trending TV shows
export const useTrendingTVShows = () => {
  return useQuery<TVShowResponse, Error>({
    queryKey: ["trendingTVShows"],
    queryFn: fetchTrendingTVShows,
  });
};

// Hook to fetch details of a specific TV show by ID
export const useTVShowDetails = (id: number) => {
  return useQuery<TVShow, Error>({
    queryKey: ["TVShowDetails", id],
    queryFn: () => fetchTVShowDetails(id),
  });
};

// Hook to search TV shows by query
export const useSearchTVShows = (query: string) => {
  return useQuery<TVShowResponse, Error>({
    queryKey: ["searchTVShows", query],
    queryFn: () => searchTVShows(query),
  });
};

// Hook to fetch similar TV shows by series ID
export const useSimilarTVShows = (series_id: number) => {
  return useQuery<TVShowResponse, Error>({
    queryKey: ["similarTVShows", series_id],
    queryFn: () => fetchSimilarTVShows(series_id),
  });
};
