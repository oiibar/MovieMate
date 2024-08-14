import React from "react";
import { fetchTrendingMovies } from "@/api/movies";
import dynamic from "next/dynamic";
const Movies = dynamic(() => import("@/components/movies/Movies"));

const MoviesPage: React.FC = async () => {
  const trendingMovies = await fetchTrendingMovies(1);

  return <Movies trendingMovies={trendingMovies} />;
};

export default MoviesPage;
