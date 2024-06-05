import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    trailer: {},
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerDetails(state, action) {
      state.trailer = action.payload;
    },
  },
});

export default movieSlice.reducer;

export const { addNowPlayingMovies, addTrailerDetails } = movieSlice.actions;
