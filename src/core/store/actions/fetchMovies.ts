import { createAsyncThunk } from '@reduxjs/toolkit';
import env from 'core/env';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${env.apiHost}/movies`);

      if (!response.ok) {
        return thunkAPI.rejectWithValue('Bad Request');
      }

      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
