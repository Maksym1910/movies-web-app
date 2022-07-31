export interface IMovie {
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  poster_path: string,
  overview: string,
  budget: number,
  revenue: number,
  runtime: number,
  genres: Array<string>,
}

export interface IMovieFormatted {
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  releaseYear: number,
  poster_path: string,
  overview: string,
  budget: string,
  revenue: string,
  runtime: string,
  genres: string,
}

export interface IMoviesResponse {
  data: Array<IMovie>,
  limit: number,
  offset: number,
  totalAmount: number,
}

export interface IMoviesQueryOptions {
  sortBy?: string,
  sortOrder?: string,
  search?: string,
  searchBy?: string,
  filter?: string[],
  offset?: number,
  limit?: number,
}

export interface IMovieByIdQueryOptions {
  id: string,
}
