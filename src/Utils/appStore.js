import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer, // Keep it consistent with the movieSlice (movies)
  },
});

export default appStore;
