import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div>
      <MovieList title={"Now Playing"} moviesData={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} moviesData={movies.popularMovies} />
      <MovieList title={"Top Rated Movies"} moviesData={movies.topRatedMovies} />
      <MovieList title={"Upcoming Movies"} moviesData={movies.upComingMovies} />

    </div>
  );
};

export default SecondaryContainer;
