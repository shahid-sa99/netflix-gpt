import React, { useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import netflixLogin from "../assets/images/netflixLogin.jpg";
import Header from "./Header";
import { validateLoginData } from "../utils/validate";
import _ from "lodash";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setIsErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleScreenHandler = () => {
    if (email.current) {
      email.current.value = "";
    }
    if (password.current) {
      password.current.value = "";
    }

    if (name.current) {
      name.current.value = "";
    }
    setIsSignUp(!isSignUp);
  };

  const handleButtonClick = () => {
    const validtionRes = validateLoginData(
      email.current.value,
      password.current.value,
      isSignUp ? name.current.value : null
    );

    if (!_.isEmpty(validtionRes)) {
      setIsErrorMessage(validtionRes);
      return;
    }
    setIsErrorMessage("");

    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              dispatch(addUser(auth.currentUser.toJSON()));
              navigate("/browse");
            })
            .catch((error) => {
              setIsErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMessage(errorCode + ":" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMessage(errorCode + ":" + errorMessage);
        });
    }
  };
  return (
    <div
      className="h-[100vh] w-[100vw] relative  "
      style={{ backgroundImage: `url(${netflixLogin})` }}
    >
      <div className="  w-full justify-center">
        <div>
          <Header />
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col bg-black opacity-80   mt-20    p-8   h-[500px] w-[360px]  min-w-[360px]     ">
            <div className="text-white font-bold pb-8 text-3xl">
              {" "}
              {isSignUp ? "Sign Up" : "Sign In"}
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col w-full"
            >
              {isSignUp && (
                <input
                  ref={name}
                  type="text"
                  className="border h-[3.5rem] m-2 p-4 bg-black text-white rounded-sm"
                  placeholder="Name"
                />
              )}

              <input
                ref={email}
                type="text"
                className="border h-[3.5rem] m-2 p-4 bg-black text-white rounded-sm"
                placeholder="Email or Phone"
              />
              <input
                ref={password}
                type="password"
                className="border h-[3.5rem] m-2 p-4 bg-black text-white rounded-sm "
                placeholder="Password"
              />

              {
                <div className="m-2 text-red-500 font-semibold ">
                  {errorMessage}
                </div>
              }
              <button
                onClick={handleButtonClick}
                className="border cursor-pointer rounded-lg m-2 h-[3rem]  bg-red-700 text-white items-center"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>

            {/* {!isSignUp && (
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
            )} */}

            <div className="text-white m-2 ">
              {!isSignUp ? (
                <>
                  <span>New to Netflix ? </span>
                  <span
                    className="font-bold cursor-pointer"
                    onClick={toggleScreenHandler}
                  >
                    Sign Up Now.
                  </span>
                </>
              ) : (
                <>
                  <span>Alredy Registered ? </span>
                  <span
                    className="font-bold cursor-pointer"
                    onClick={toggleScreenHandler}
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
