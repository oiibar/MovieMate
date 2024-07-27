interface MovieListItemProps {
  id: number;
  title: string;
  posterPath: string;
}

const MovieListItem: React.FC<MovieListItemProps> = ({
  id,
  title,
  posterPath,
}) => {
  const imageUrl = `https://image.tmdb.org/t/p/w200/${posterPath}`;

  return (
    <div className="flex flex-col items-center gap-2 group rounded-lg w-64 flex-shrink-0 cursor-pointer">
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
