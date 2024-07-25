// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "./mediaSlice";

export const store = configureStore({
  reducer: {
    media: mediaReducer,
  },
});

// Define RootState and AppDispatch types for use in the application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
