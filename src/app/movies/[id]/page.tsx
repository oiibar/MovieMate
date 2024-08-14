import React from "react";
import {
  fetchMovieDetails,
  fetchMovieVideo,
  fetchSimilarMovies,
} from "@/api/movies";
import MovieDetails from "@/components/movies/MovieDetails";

interface Params {
  params: {
    id: string;
  };
}

const MoviePage: React.FC<Params> = async ({ params }) => {
  const { id } = params;
  const movieId = Number(id);

  const movie = await fetchMovieDetails(movieId);
  const movieVideo = await fetchMovieVideo(movieId);
  const similarMovies = await fetchSimilarMovies(movieId);

  return (
    <MovieDetails
      movie={movie}
      movieVideo={movieVideo}
      similarMovies={similarMovies.results}
    />
  );
};

export default MoviePage;
