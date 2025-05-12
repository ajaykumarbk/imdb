export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  runtime?: number;
  genres?: Genre[];
  credits?: Credits;
}

export interface TVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  episode_run_time?: number[];
  number_of_seasons?: number;
  genres?: Genre[];
  credits?: Credits;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Person {
  id: number;
  name: string;
  profile_path: string;
  character?: string;
  job?: string;
}

export interface Credits {
  cast: Person[];
  crew: Person[];
}

export interface SearchParams {
  query: string;
  type?: 'movie' | 'tv' | 'person';
  page?: number;
  genre?: number;
  year?: number;
  sort_by?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
}

export interface Review {
  id: number;
  author: string;
  content: string;
  created_at: string;
  rating: number;
  user_id?: string;
  avatar?: string;
}

export interface MediaType {
  movie: Movie;
  tv: TVShow;
}

export type MediaItem = Movie | TVShow;