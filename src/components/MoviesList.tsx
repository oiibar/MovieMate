import React from "react";
import MovieListItem from "./MovieListItem";

const MoviesList = () => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h3>Trending movies</h3>
        <button>View more</button>
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
