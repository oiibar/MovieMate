import React from "react";
import MovieListItem from "./MovieListItem";
import Button from "./common/Button";

const MoviesList = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between">
        <h3 className="font-bold text-lg">Trending movies</h3>
        <Button text="View more" variant="default" />
      </div>
      <div className="flex justify-between gap-4">
        <MovieListItem />
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
