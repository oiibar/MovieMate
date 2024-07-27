import MovieListItem from "./MovieListItem";
import Button from "../common/Button";
import Link from "next/link";
import { Movie, TVShow } from "@/api/types";

// Type guard to check if item is a Movie
function isMovie(item: Movie | TVShow): item is Movie {
  return (item as Movie).title !== undefined;
}

interface MoviesListProps {
  listTitle: string;
  media?: (Movie | TVShow)[];
}

const MoviesList: React.FC<MoviesListProps> = ({ listTitle, media = [] }) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">{listTitle}</h3>
        <Link href="/movies">
          <Button text="View more" variant="default" />
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-hidden">
        {media.length === 0 ? (
          <div className="text-white">No items available</div>
        ) : (
          media.map((item) => (
            <MovieListItem
              id={item.id}
              title={isMovie(item) ? item.title : item.name}
              posterPath={item.poster_path}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default MoviesList;
