import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    trailer: {},
    genres: [],
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerDetails(state, action) {
      state.trailer = action.payload;
    },
    addGeners(state, action) {
      state.genres = action.payload;
    },
    addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies(state,action){
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies(state,action){
      state.upComingMovies = action.payload;
    }
  },
});

export default movieSlice.reducer;

export const {
  addNowPlayingMovies,
  addTrailerDetails,
  addGeners,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies
} = movieSlice.actions;
