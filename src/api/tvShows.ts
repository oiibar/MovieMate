import { tmdbClient } from "./tmdbClient";
import { TVShow, TVShowResponse, TVShowVideo } from "./types";

export const fetchTopRatedTVShows = async (
  page: number = 1
): Promise<TVShow[]> => {
  const response = await tmdbClient.get("/tv/top_rated", { params: { page } });
  return response.data.results;
};

export const fetchTrendingTVShows = async (
  page: number = 1
): Promise<TVShow[]> => {
  const response = await tmdbClient.get("/trending/tv/day", {
    params: { page },
  });
  return response.data.results;
};

export const fetchTVShowDetails = async (id: number): Promise<TVShow> => {
  const response = await tmdbClient.get(`/tv/${id}`);
  return response.data;
};

export const fetchTVShowVideo = async (id: number): Promise<TVShowVideo> => {
  const response = await tmdbClient.get(`/tv/${id}/videos`);
  return response.data;
};

export const searchTVShows = async (
  query: string,
  page: number = 1
): Promise<TVShowResponse> => {
  const response = await tmdbClient.get("/search/tv", {
    params: { query, page },
  });
  return response.data;
};

export const fetchSimilarTVShows = async (
  series_id: number,
  page: number = 1
): Promise<TVShowResponse> => {
  const response = await tmdbClient.get(`/tv/${series_id}/similar`, {
    params: { page },
  });
  return response.data;
};
