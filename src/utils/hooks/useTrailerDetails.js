import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerDetails } from "../../store/movieSlice";
import _ from "lodash";
import { TMDB_API_HEADERS } from "../tmdbConstants";

const useTrailerDetails = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieVideos = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      TMDB_API_HEADERS
    );
    const data = await res.json();

    const movieVideos = data?.results;

    const filteredMovieVideos = movieVideos.filter((video) => {
      return video?.type === "Trailer";
    });

    const trailer = !_.isEmpty(filteredMovieVideos)
      ? filteredMovieVideos[0]
      : movieVideos[0];

    dispatch(addTrailerDetails(trailer));
  };

  useEffect(() => {
    fetchMovieVideos();
  }, []);

  if (_.isEmpty(movieId)) return;
};

export default useTrailerDetails;
