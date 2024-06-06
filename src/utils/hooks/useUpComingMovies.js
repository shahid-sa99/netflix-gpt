import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_HEADERS } from "../tmdbConstants";
import { addTopRatedMovies, addUpComingMovies } from "../../store/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      TMDB_API_HEADERS
    );
    const data = await res.json();
    dispatch(addUpComingMovies(data?.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useUpComingMovies;
