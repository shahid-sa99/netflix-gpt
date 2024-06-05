import React, { useEffect } from "react";
import ErrorBoundary from "../common/elements/ErrorBoundary";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { TMDB_API_HEADERS } from "../utils/tmdbConstants";
import { addNowPlayingMovies } from "../store/movieSlice";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const movie = useSelector((state) => state.movie.nowPlayingMovies);
  useNowPlayingMovies();

  return (
    <ErrorBoundary
      onError={(e) => {
        console.log(e);
      }}
    >
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </ErrorBoundary>
  );
};

export default Browse;
