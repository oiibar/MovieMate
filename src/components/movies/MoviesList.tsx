import React from "react";
import MovieListItem from "./MovieListItem";
import Button from "../common/Button";
import Link from "next/link";

interface MoviesListProps {
  title: string;
}

const MoviesList: React.FC<MoviesListProps> = ({ title = "All movies" }) => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h3 className="font-bold text-lg">{title}</h3>
        <Link href="/movies">
          <div className="flex items-center cursor-pointer">
            <Button text="View more" variant="default" />
          </div>
        </Link>
      </div>
      <div className="flex justify-between gap-4">
        <MovieListItem />
        <MovieListItem />
        <MovieListItem />
        <MovieListItem />
        <MovieListItem />
      </div>
    </section>
  );
};

export default MoviesList;
