import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import netflixLogin from "../assets/images/netflixLogin.jpg";
import Header from "./Header";
import classNames from "classnames";
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const signUpClickHandler = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div
      className="h-[100vh] w-[100vw] relative  "
      style={{ backgroundImage: `url(${netflixLogin})` }}
    >
      <div className="p-6">
        <Header />
        <div className="flex justify-center ">
          <div className="flex flex-col bg-black opacity-80  h-[85vh]  p-12  absolute bottom-0 w-[30%]     ">
            <div className="text-white font-bold pb-8 text-3xl">
              {" "}
              {isSignUp ? "Sign Up" : "Sign In"}
            </div>
            <form className="flex flex-col w-full">
              {isSignUp && (
                <input
                  type="text"
                  className="border h-[3.5rem] m-2 p-4 bg-black text-white rounded-sm"
                  placeholder="Name"
                />
              )}

              <input
                type="text"
                className="border h-[3.5rem] m-2 p-4 bg-black text-white rounded-sm"
                placeholder="Email or Phone"
              />
              <input
                type="password"
                className="border h-[3.5rem] m-2 p-4 bg-black text-white rounded-sm "
                placeholder="Password"
              />
              <button className="border cursor-pointer rounded-lg m-2 h-[3rem]  bg-red-700 text-white items-center">
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>

            {!isSignUp && (
              <>
                <div className="text-white font-bold  text-2xl text-center my-2 ">
                  OR
                </div>

                <button className="border rounded-lg m-2 h-[3rem]   bg-gray-800 text-white items-center">
                  Use a sign-in code
                </button>

                <button className="   h-[3rem]  text-white items-center m-1">
                  Forgot password
                </button>

                <div className="flex flex-row m-2">
                  <input type="checkbox" className="h-4 w-4 mt-1" />

                  <div className="text-white pl-2">Remember me</div>
                </div>
              </>
            )}

            <div className="text-white m-2 ">
              {!isSignUp ? (
                <>
                  <span>New to Netflix ? </span>
                  <span
                    className="font-bold cursor-pointer"
                    onClick={signUpClickHandler}
                  >
                    Sign Up Now.
                  </span>
                </>
              ) : (
                <>
                  <span>Alredy Registered ? </span>
                  <span
                    className="font-bold cursor-pointer"
                    onClick={signUpClickHandler}
                  >
                    Sign In Now.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
