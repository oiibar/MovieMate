// types.ts

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
}

export interface Genres {
  id: number;
  name: string;
}

export interface Movie {
  genres: Genres[];
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface MovieVideo {
  id: number;
  results: {
    id: string;
    key: string;
    name: string;
    published_at: string;
  }[];
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface TVShow {
  id: number;
  name?: string;
  overview: string;
  first_air_date?: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
}

export interface TVShowResponse {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
}
