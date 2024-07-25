// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

// Define RootState and AppDispatch types for use in the application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
