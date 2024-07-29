"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FaStar } from "react-icons/fa";
import {
  useSimilarTVShows,
  useTVShowDetails,
  useTVShowVideo,
} from "@/hooks/useTVShows";
import { format } from "date-fns";
import MoviesList from "@/components/movies/MoviesList";

const TVShowDetails: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const TVShowId = Number(id);

  const { data: tv, isLoading, error } = useTVShowDetails(TVShowId);
  const { data: TVShowVideo } = useTVShowVideo(TVShowId);
  const {
    data: similarTVShows,
    isLoading: isSimilarLoading,
    error: similarError,
  } = useSimilarTVShows(TVShowId);

  if (isLoading) return <div className="text-center text-2xl">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!tv) return <div>No TV Show found</div>;

  const formattedDate = tv.first_air_date
    ? format(new Date(tv.first_air_date), "MMM d, yyyy")
    : "Unknown date";

  const imageUrl = `https://image.tmdb.org/t/p/original/${tv.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w200/${tv.poster_path}`;

  const videos = TVShowVideo?.results || [];

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
              className="rounded-2xl h-96 w-full object-cover hidden md:block"
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

      {videos.length > 0 && (
        <section className="w-full container pb-28 pt-10">
          <h2 className="text-3xl font-bold mb-4">Watch Trailers</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {videos.map((video) => (
              <iframe
                key={video.id}
                src={`https://www.youtube.com/embed/${video.key}`}
                frameBorder="0"
                allowFullScreen
                className="w-full sm:w-1/2 lg:w-1/3 h-64"
                title={video.name}
              />
            ))}
          </div>
        </section>
      )}

      <section className="w-full container pb-28 pt-10 flex flex-col gap-10">
        {isSimilarLoading ? (
          <div className="text-center text-2xl">
            Loading similar TV shows...
          </div>
        ) : similarError ? (
          <div>Error loading similar TV shows: {similarError.message}</div>
        ) : similarTVShows ? (
          <MoviesList
            listTitle="Similar TV Shows"
            media={similarTVShows.results}
            type="tvshows"
          />
        ) : (
          <div>No similar TV shows found</div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default TVShowDetails;
