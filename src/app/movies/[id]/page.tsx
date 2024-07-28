"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useMovieDetails } from "@/hooks/useMovies";
import { format } from "date-fns";
import { FaStar } from "react-icons/fa";

const MovieDetails: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const { data: movie, isLoading, error } = useMovieDetails(Number(id));

  if (isLoading) return <div className="text-center text-2xl">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!movie) return <div>No movie found</div>;
  const imageUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`; // Use original backdrop path
  const posterUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;

  const formattedDate = movie.release_date
    ? format(new Date(movie.release_date), "MMM d, yyyy")
    : "Unknown date";

  return (
    <main>
      <Header className="absolute top-0 left-0 right-0 z-50 bg-transparent" />

      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container pb-28 pt-48 flex flex-col gap-20 justify-center items-center relative z-10">
          <section className="flex gap-4 p-2 bg-opacity-80 rounded-lg shadow-lg items-center">
            <img
              src={posterUrl}
              className="rounded-2xl h-96 w-full object-cover"
              alt={movie.title}
            />
            <div className="flex flex-col gap-6 max-w-lg">
              <h2 className="text-6xl font-bold">{movie.title}</h2>
              <div className="text-sm flex gap-2 items-center">
                <p>{formattedDate}</p>
                <div className="flex gap-1">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-gray-800 text-white px-2 py-1 rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
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
          {/* Additional sections or components can be added here */}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default MovieDetails;
