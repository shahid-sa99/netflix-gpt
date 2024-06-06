import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_HEADERS } from "../tmdbConstants";
import { addTopRatedMovies } from "../../store/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TMDB_API_HEADERS
    );
    const data = await res.json();
    dispatch(addTopRatedMovies(data?.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useTopRatedMovies;
