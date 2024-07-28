import React from "react";
import { Movie, TVShow } from "@/api/types";
import MovieListItem from "./MovieListItem";
import Button from "../common/Button";
import Link from "next/link";

function isMovie(item: Movie | TVShow): item is Movie {
  return (item as Movie).title !== undefined;
}

interface MoviesListProps {
  listTitle: string;
  media?: (Movie | TVShow)[];
  type: "movies" | "tvshows";
}

const MoviesList: React.FC<MoviesListProps> = ({
  listTitle,
  media = [],
  type,
}) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">{listTitle}</h3>
        <Link href={`/${type}`}>
          <Button text="View more" variant="default" />
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-hidden">
        {media.length === 0 ? (
          <div className="text-white">No items available</div>
        ) : (
          media.map((item) => (
            <MovieListItem
              key={item.id}
              id={item.id}
              title={isMovie(item) ? item.title : item.name}
              posterPath={item.poster_path}
              type={type}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default MoviesList;
