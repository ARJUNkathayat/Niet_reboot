import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trailers:null,
    topRatedMovies:[]
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      // Replace the nowPlayingMovies array with the new data
      //state.nowplayingmovies.push(action.payload)
      state.nowPlayingMovies = action.payload;  // Replace the state array with the new one
    },
    addTrailerVideo:(state,action)=>{
        state.trailers = action.payload;
    },
    addTopRatedMovies:(state,action) =>{
          state.topRatedMovies=action.payload
    }

    
  },
});

export const { addNowPlayingMovies,addTrailerVideo,addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;
