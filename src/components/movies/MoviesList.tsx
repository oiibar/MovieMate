import React from "react";
import MovieListItem from "./MovieListItem";
import Button from "../common/Button";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MoviesListProps {
  listTitle: string;
  movies?: Movie[];
}

const MoviesList: React.FC<MoviesListProps> = ({ listTitle, movies = [] }) => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h3 className="font-bold text-lg">{listTitle}</h3>
        <Link href="/movies">
          <div className="flex items-center cursor-pointer">
            <Button text="View more" variant="default" />
          </div>
        </Link>
      </div>
      <div className="flex justify-between gap-1 overflow-x-scroll scrollbar-hidden">
        {movies.length === 0 ? (
          <div>No movies available</div>
        ) : (
          movies.map((movie) => (
            <MovieListItem
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default MoviesList;
