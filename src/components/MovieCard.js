import React, { useEffect, useState } from "react";
import { TMDB_API_HEADERS } from "../utils/tmdbConstants";
import { useSelector } from "react-redux";
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import _ from "lodash";

const MovieCard = ({ movie }) => {
  const genres = useSelector((store) => store.movie.genres);
  const [hovered, setHovered] = useState(false);
  const [trailer, setTailer] = useState();

  const { id, poster_path, genre_ids, popularity, adult } = movie;

  const genreNames = genres
    .filter((genre) => genre_ids.includes(genre.id))
    .map((genre) => genre.name);

  const fetchMovieVideos = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
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

    setTailer(trailer);
  };

  useEffect(() => {
    fetchMovieVideos();
  }, [movie]);

  if (!movie) return;

  return (
    <div
      className="flex   cursor-pointer  min-w-[230px] h-[130px]  hover:h-[300px]  border  "
      style={{ scrollbarWidth: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <img
          className=" aspect-video "
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        />
      ) : (
        <div className="text-white p-3 ">
          <div className="  ">
            <iframe
              src={`https://www.youtube.com/embed/${trailer?.key}?si=xqcjDOwm6jxV1Vxc&autoplay=1&mute=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{ width: "100%" }}
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div className="flex flex-row gap-2 pb-2 ">
            <MdOutlinePlayCircle size={40} style={{ color: "white" }} />
            <IoIosAddCircleOutline size={40} style={{ color: "white" }} />
          </div>
          <div className="flex flex-row gap-2 font-semibold pb-2">
            <div>{genreNames[0]} </div>
            <div>{genreNames[1]} </div>
          </div>
          <div className="border flex  w-20 h-8  px-5 py-1  rounded">
            {adult ? "A" : "U/A"}
          </div>
          <div className=" text-green-500 font-semibold ">
            {Math.floor(popularity / 100)} % Match
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
