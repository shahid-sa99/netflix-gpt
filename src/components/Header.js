import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDropDown, setOpenDropDown] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser(user.toJSON()));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // using the call back to unsubscribe from onAuthStateChanged event when the component unmounts
    return () => unsubscribe();
  }, []);

  const dropDownClickHandler = () => {
    setOpenDropDown(!openDropDown);
  };

  const signOutClickHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute px-7  bg-gradient-to-t z-[999]  from-black w-screen  flex justify-between ">
      <div className="mt-4">
        <img className="w-44" src={NETFLIX_LOGO} alt="netflix-logo" />
      </div>

      {user && (
        <div className="relative mt-2 mr-6">
          <div className=" cursor-pointer py-6  " onClick={dropDownClickHandler}>
            <img alt="logout-icon" src={USER_ICON} />
          </div>

          {openDropDown && (
            <div className="border absolute cursor-pointer right-0 w-60 p-4 top-12 mt-4 mr-2 bg-black text-white flex flex-col m-2 ">
              <div className="px-2"> {user?.displayName}</div>
              <div className="px-2">Manage Profiles</div>
              <div className="px-2">Account</div>
              <div className="px-2 pb-2">Help Center</div>
              <div
                onClick={signOutClickHandler}
                className="px-2 border-t-[1px] pt-1  border-solid border-white"
              >
                Sign Out
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
