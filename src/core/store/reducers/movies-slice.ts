import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMovie } from 'models/movies';
import { fetchMovies } from '../actions/fetch-movies';

interface MovieState {
  movies: IMovie[],
  isLoading: boolean,
  error: string,
}

const initialState: MovieState = {
  movies: [],
  isLoading: false,
  error: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
  },
  extraReducers: {
    [fetchMovies.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.fulfilled.type]: (state, action: PayloadAction<IMovie[]>) => {
      state.isLoading = false;
      state.movies = action.payload;
      state.error = '';
    },
    [fetchMovies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const moviesReducer = moviesSlice.reducer;
export default moviesSlice;
