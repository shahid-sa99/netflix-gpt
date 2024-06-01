import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import NotFound from "../common/elements/NotFound";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../store/userSlice";

const Body = () => {
  const dispatch = useDispatch();
 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser(user.toJSON()));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
