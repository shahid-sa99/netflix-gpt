import React, { useEffect } from "react";
import { TMDB_API_HEADERS } from "../utils/tmdbConstants";
import _ from "lodash";
import { useSelector } from "react-redux";
import useTrailerDetails from "../utils/hooks/useTrailerDetails";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movie.trailer);
  useTrailerDetails(movieId);

  if (_.isEmpty(trailer)) {
    return;
  }
  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?si=xqcjDOwm6jxV1Vxc&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
