import React from "react";
import { fetchTrendingTVShows } from "@/api/tvShows";
import dynamic from "next/dynamic";
const TVShows = dynamic(() => import("@/components/movies/TVShows"));

const MoviesPage: React.FC = async () => {
  const trendingTVShows = await fetchTrendingTVShows(1);

  return <TVShows trendingTVShows={trendingTVShows} />;
};

export default MoviesPage;
