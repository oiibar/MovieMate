"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FaStar } from "react-icons/fa";
import { useSimilarTVShows, useTVShowDetails } from "@/hooks/useTVShows";
import { format } from "date-fns";
import MoviesList from "@/components/movies/MoviesList";

const TVShowDetails: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const TVShowId = Number(id);

  const { data: tv, isLoading, error } = useTVShowDetails(Number(id));
  const {
    data: similarTVShows,
    isLoading: isSimilarLoading,
    error: similarError,
  } = useSimilarTVShows(TVShowId);

  if (isLoading) return <div className="text-center text-2xl">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!tv) return <div>No TVShow found</div>;

  const formattedDate = tv.first_air_date
    ? format(new Date(tv.first_air_date), "MMM d, yyyy")
    : "Unknown date";

  const imageUrl = `https://image.tmdb.org/t/p/original/${tv.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w200/${tv.poster_path}`;

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
              alt={tv.name}
            />
            <div className="flex flex-col gap-6 max-w-lg">
              <h2 className="text-6xl font-bold">{tv.name}</h2>
              <div className="text-sm flex gap-4">
                <p>{formattedDate}</p>
                <div className="text-sm">
                  {tv.genres.map((genre) => genre.name).join(", ")}
                </div>
                <p className="flex items-center gap-1">
                  <FaStar className="text-amber-300" />
                  {Math.round(tv.vote_average * 10) / 10}/10
                </p>
              </div>
              <p className="text-sm">
                {tv.overview || "No overview available"}
              </p>
            </div>
          </section>
        </div>
      </div>
      <section className="w-full container pb-28 pt-10 flex flex-col gap-10">
        {isSimilarLoading ? (
          <div className="text-center text-2xl">Loading similar movies...</div>
        ) : similarError ? (
          <div>Error loading similar movies: {similarError.message}</div>
        ) : similarTVShows ? (
          <MoviesList
            listTitle="Similar Movies"
            media={similarTVShows.results}
            type="tvshows"
          />
        ) : (
          <div>No similar movies found</div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default TVShowDetails;
