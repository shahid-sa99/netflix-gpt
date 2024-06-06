import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { TMDB_API_HEADERS } from '../tmdbConstants';
import { addPopularMovies } from '../../store/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        TMDB_API_HEADERS
      );
      const data = await res.json();
      dispatch(addPopularMovies(data?.results));
    };
  
    useEffect(() => {
      fetchData();
    }, []);
}

export default usePopularMovies