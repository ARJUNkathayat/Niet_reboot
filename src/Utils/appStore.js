import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import GptReducer from './GptSlice'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    GPT:  GptReducer
  },
});

export default appStore;
