import React from "react";
import {
  fetchSimilarTVShows,
  fetchTVShowDetails,
  fetchTVShowVideo,
} from "@/api/tvShows";
import TVShowDetails from "@/components/movies/TVShowDetails";

interface Props {
  params: {
    id: string;
  };
}

const SeriesPage: React.FC<Props> = async ({ params }) => {
  const { id } = params;
  const tvShowId = Number(id);

  const tvShow = await fetchTVShowDetails(tvShowId);
  const tvShowVideo = await fetchTVShowVideo(tvShowId);
  const similarTVShows = await fetchSimilarTVShows(tvShowId);

  return (
    <TVShowDetails
      tvShow={tvShow}
      tvShowVideo={tvShowVideo}
      similarTVShows={similarTVShows.results}
    />
  );
};

export default SeriesPage;
