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

export const useTopRatedTVShows = () => {
  return useQuery<TVShow[], Error>({
    queryKey: ["topRatedTVShows"],
    queryFn: fetchTopRatedTVShows,
  });
};

export const useTrendingTVShows = () => {
  return useQuery<TVShow[], Error>({
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

export const useTVShowVideo = (id: number) => {
  return useQuery<TVShowVideo, Error>({
    queryKey: ["tvShowVideo", id],
    queryFn: () => fetchTVShowVideo(id),
  });
};
