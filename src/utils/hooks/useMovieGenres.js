import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addGeners } from "../../store/movieSlice";
import { TMDB_API_HEADERS } from "../tmdbConstants";

const useMovieGenres = () => {
  const dispatch = useDispatch();

  const fetchGeners = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      TMDB_API_HEADERS
    );
    const data = await response.json();
    dispatch(addGeners(data?.genres));
  };

  useEffect(() => {
    fetchGeners();
  }, []);
};

export default useMovieGenres;
