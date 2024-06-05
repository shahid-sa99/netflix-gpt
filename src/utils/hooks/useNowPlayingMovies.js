import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../store/movieSlice";
import { TMDB_API_HEADERS } from "../tmdbConstants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      TMDB_API_HEADERS
    );
    const data = await res.json();
    dispatch(addNowPlayingMovies(data?.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useNowPlayingMovies;
