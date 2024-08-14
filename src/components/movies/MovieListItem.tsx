"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface MovieListItemProps {
  id: number;
  title: string;
  posterPath: string;
  type: "movies" | "tvshows";
}

const MovieListItem: React.FC<MovieListItemProps> = ({
  id,
  title,
  posterPath,
  type,
}) => {
  const router = useRouter();
  const imageUrl = `https://image.tmdb.org/t/p/w200/${posterPath}`;

  const handleClick = () => {
    router.push(`/${type}/${id}`);
  };

  return (
    <div
      className="flex flex-col items-center gap-2 group rounded-lg w-64 flex-shrink-0 cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="w-full h-96 object-cover rounded-xl transition-transform duration-150 ease-in-out transform group-hover:scale-105"
        alt={title}
        src={imageUrl}
      />
      <p className="text-center text-sm text-white group-hover:text-orange transition-colors duration-150">
        {title}
      </p>
    </div>
  );
};

export default MovieListItem;
