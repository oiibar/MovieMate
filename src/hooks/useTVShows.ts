import { useQuery } from "@tanstack/react-query";
import { TVShow, TVShowResponse, TVShowVideo } from "@/api/types";
import {
  fetchTopRatedTVShows,
  fetchTrendingTVShows,
  fetchTVShowDetails,
  searchTVShows,
  fetchSimilarTVShows,
  fetchTVShowVideo,
} from "@/api/tvShows";

export const useTopRatedTVShows = (page: number = 1) => {
  return useQuery<TVShow[], Error>({
    queryKey: ["topRatedTVShows", page],
    queryFn: () => fetchTopRatedTVShows(page),
  });
};

export const useTrendingTVShows = (page: number = 1) => {
  return useQuery<TVShow[], Error>({
    queryKey: ["trendingTVShows", page],
    queryFn: () => fetchTrendingTVShows(page),
  });
};

export const useTVShowDetails = (id: number) => {
  return useQuery<TVShow, Error>({
    queryKey: ["TVShowDetails", id],
    queryFn: () => fetchTVShowDetails(id),
  });
};

export const useSearchTVShows = (query: string, page: number = 1) => {
  return useQuery<TVShowResponse, Error>({
    queryKey: ["searchTVShows", query, page],
    queryFn: () => searchTVShows(query, page),
  });
};

export const useSimilarTVShows = (series_id: number, page: number = 1) => {
  return useQuery<TVShowResponse, Error>({
    queryKey: ["similarTVShows", series_id, page],
    queryFn: () => fetchSimilarTVShows(series_id, page),
  });
};

export const useTVShowVideo = (id: number) => {
  return useQuery<TVShowVideo, Error>({
    queryKey: ["tvShowVideo", id],
    queryFn: () => fetchTVShowVideo(id),
  });
};
