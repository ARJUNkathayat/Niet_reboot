import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trailers:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      // Replace the nowPlayingMovies array with the new data
      //state.noeplayingmovies.push(action.payload)
      state.nowPlayingMovies = action.payload;  // Replace the state array with the new one
    },
    addTrailerVideo:(state,action)=>{
        state.trailers = action.payload;
    }

    
  },
});

export const { addNowPlayingMovies,addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
