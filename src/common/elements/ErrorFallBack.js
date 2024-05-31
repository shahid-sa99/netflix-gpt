import React from "react";
import { Link } from "react-router-dom";

const ErrorFallBack = () => {
  return (
    <div className="flex h-[100vh] justify-center flex-col ">
      <div className="flex flex-row justify-center m-2 text-3xl font-bold">
        Something went wrong
      </div>
      <Link to={"/"} className="flex flex-row justify-center">
        <button className=" rounded-lg bg-green-500 p-2 text-white ">
          Go to home page{" "}
        </button>
      </Link>
    </div>
  );
};

export default ErrorFallBack;
