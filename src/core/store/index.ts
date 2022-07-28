import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { moviesApi } from 'services/movies-service';
import { moviesReducer } from './reducers/movies-slice';

const rootReducer = combineReducers({
  moviesReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

const setupStore = () => (
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => (
      getDefaultMiddleware().concat(moviesApi.middleware)
    ),
  })
);

export default setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
