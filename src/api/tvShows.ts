import { tmdbClient } from "./tmdbClient";
import { TVShow, TVShowResponse, TVShowVideo } from "./types";

export const fetchTopRatedTVShows = async (): Promise<TVShow[]> => {
  const response = await tmdbClient.get("/tv/top_rated");
  return response.data.results;
};
export const fetchTrendingTVShows = async (): Promise<TVShow[]> => {
  const response = await tmdbClient.get("trending/tv/day");
  return response.data.results;
};
export const fetchTVShowDetails = async (id: number): Promise<TVShow> => {
  const response = await tmdbClient.get(`/tv/${id}`);
  return response.data;
};
export const fetchTVShowVideo = async (id: number): Promise<TVShowVideo> => {
  const response = await tmdbClient.get(`tv/${id}/videos`);
  return response.data;
};
export const searchTVShows = async (query: string): Promise<TVShowResponse> => {
  const response = await tmdbClient.get(`search/tvshow`, {
    params: {
      query,
    },
  });
  return response.data;
};
export const fetchSimilarTVShows = async (
  series_id: number
): Promise<TVShowResponse> => {
  const response = await tmdbClient.get(`tv/${series_id}/similar`);
  return response.data;
};
