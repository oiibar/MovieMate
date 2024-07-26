import React from "react";

interface MovieListItemProps {
  title: string;
  posterPath: string;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ title, posterPath }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w200/${posterPath}`;

  return (
    <div className="flex flex-col gap-2 justify-center items-center group p-4 rounded-lg">
      <img className="rounded-2xl" alt={title} src={imageUrl} />
      <p className="group-hover:text-orange transition-colors duration-150">
        {title}
      </p>
    </div>
  );
};

export default MovieListItem;
