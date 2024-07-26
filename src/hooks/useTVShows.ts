import { useQuery } from "@tanstack/react-query";
import { TVShow, TVShowResponse } from "@/api/types";
import {
  fetchTopRatedTVShows,
  fetchTrendingTVShows,
  fetchTVShowDetails,
  searchTVShows,
  fetchSimilarTVShows,
} from "@/api/tvShows";

export const useTopRatedTVShows = () => {
  return useQuery<TVShowResponse, Error>({
    queryKey: ["topRatedTVShows"],
    queryFn: fetchTopRatedTVShows,
  });
};

export const useTrendingTVShows = () => {
  return useQuery<TVShowResponse, Error>({
    queryKey: ["trendingTVShows"],
    queryFn: fetchTrendingTVShows,
  });
};

export const useTVShowDetails = (id: number) => {
  return useQuery<TVShow, Error>({
    queryKey: ["TVShowDetails", id],
    queryFn: () => fetchTVShowDetails(id),
  });
};

export const useSearchTVShows = (query: string) => {
  return useQuery<TVShowResponse, Error>({
    queryKey: ["searchTVShows", query],
    queryFn: () => searchTVShows(query),
  });
};

export const useSimilarTVShows = (series_id: number) => {
  return useQuery<TVShowResponse, Error>({
    queryKey: ["similarTVShows", series_id],
    queryFn: () => fetchSimilarTVShows(series_id),
  });
};
