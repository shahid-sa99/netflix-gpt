import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 px-12   text-white absolute w-screen aspect-video ">
      <h1 className="font-bold text-4xl ">{title}</h1>
      <p className="font-semibold pt-3 w-6/12">{overview}</p>
      <div className="pt-3">
        <button className="  bg-white text-black rounded py-2 px-8  hover:bg-gray-300">
          {" "}
          ▶️ Play
        </button>
        <button className=" bg-gray-400 rounded py-2 px-12 ml-4 "> Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
