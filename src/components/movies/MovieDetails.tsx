"use client";
import React from "react";
import Header from "@/components/movies/layout/Header";
import { format } from "date-fns";
import { FaStar } from "react-icons/fa";
import MoviesList from "@/components/movies/MoviesList";
import { Movie, MovieVideo } from "@/api/types";

interface Props {
  movie: Movie;
  movieVideo: MovieVideo;
  similarMovies: Movie[];
}

const MovieDetails: React.FC<Props> = ({
  movie,
  movieVideo,
  similarMovies,
}) => {
  const formattedDate = movie.release_date
    ? format(new Date(movie.release_date), "MMM d, yyyy")
    : "Unknown date";

  const videos = movieVideo?.results || [];

  return (
    <main>
      <Header className="absolute top-0 left-0 right-0 z-50 bg-transparent" />

      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container pb-28 pt-48 flex flex-col gap-20 justify-center items-center relative z-10">
          <section className="flex gap-4 p-2 bg-opacity-80 rounded-lg shadow-lg items-center">
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              className="rounded-2xl h-96 w-full object-cover hidden md:block"
              alt={movie.title}
            />
            <div className="flex flex-col gap-6 max-w-lg">
              <h2 className="text-5xl font-bold">{movie.title}</h2>
              <div className="text-sm flex gap-4 items-center">
                <p>{formattedDate}</p>
                <div className="text-sm">
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </div>
                <p className="flex items-center gap-1">
                  <FaStar className="text-amber-300" />
                  {Math.round(movie.vote_average * 10) / 10}/10
                </p>
              </div>
              <p className="text-sm">
                {movie.overview || "No overview available"}
              </p>
            </div>
          </section>
        </div>
      </div>

      {videos.length > 0 && (
        <section className="w-full container pb-28 pt-10">
          <h2 className="text-3xl font-bold mb-4">Watch Trailers</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {videos.map((video) => (
              <iframe
                key={video.id}
                src={`https://www.youtube.com/embed/${video.key}`}
                frameBorder="0"
                allowFullScreen
                className="w-full sm:w-1/2 lg:w-1/3 h-64"
                title={video.name}
              />
            ))}
          </div>
        </section>
      )}

      <section className="w-full container pb-28 pt-10 flex flex-col gap-10">
        {similarMovies.length > 0 ? (
          <MoviesList
            listTitle="Similar Movies"
            media={similarMovies}
            type="movies"
          />
        ) : (
          <div>No similar movies found</div>
        )}
      </section>
    </main>
  );
};

export default MovieDetails;
