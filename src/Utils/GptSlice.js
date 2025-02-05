import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "GPT",
    initialState: {
        showGptSearch:false,
    },
    reducers: {
     toggleGptSearchView :(state,action) =>{
        state.showGptSearch = !state.showGptSearch
     }
    }
});

export const { toggleGptSearchView  } = GptSlice.actions;
export default GptSlice.reducer;