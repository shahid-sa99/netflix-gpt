import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [openDropDown, setOpenDropDown] = useState(false);
  const user = useSelector((state) => state.user);

  const dropDownClickHandler = () => {
    setOpenDropDown(!openDropDown);
  };

  const signOutClickHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute px-7  bg-gradient-to-b from-black w-screen  flex justify-between ">
      <div>
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>

      {user && (
        <div className="relative">
          <div className=" cursor-pointer py-6 " onClick={dropDownClickHandler}>
            <img
              alt="logout-icon"
              src="https://occ-0-5690-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            />
          </div>

          {openDropDown && (
            <div className="border absolute cursor-pointer right-0 w-60 p-4 top-12 bg-black text-white flex flex-col m-2 ">
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
