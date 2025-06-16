import { useTheme } from "@mui/material";
import React, { useState } from "react";
import Heart from "../../../assets/home/favorites/heart.svg";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Hotel from "../../../assets/home/favorites/hotel.svg";

export default function Favourites() {
  const theme = useTheme();
  const navigate = useNavigate();
  // const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const isNextStayRoute = location.pathname.endsWith("next-stay");

  const navToNextStay = () => {
    navigate("/home/menu/favourites/next-stay");
  };

  const title = "Your favourites";
  const notLoginTitle = "Keep track of stays you like";
  const createAcc = "Log in or create an account";
  const secCreateAcc =
    "to save your favorite stays to your account and create your own lists.";

  const nextStayTitle = "Your Next Stay";
  const noOfTimesStay = 0;

  return (
    <div>
      {isNextStayRoute ? (
        <Outlet />
      ) : (
        <div>
          <div className="border shadow-md rounded-md p-2">
            <div className="flex">
              <div
                className="!mt-[1px] mr-2 border rounded-full h-fit p-2"
                style={{ backgroundColor: theme.palette.button.secondary }}
              >
                <img src={Heart} className="h-4 w-4" />
              </div>
              <div>
                <div className="font-bold !text-[20px]">{notLoginTitle}</div>
                <div className="flex space-x-1">
                  <div className="text-blue-600 hover:underline cursor-pointer">
                    {createAcc}
                  </div>
                  <div>{secCreateAcc}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <div className="font-bold text-[30px]">{title}</div>
          </div>
          <div
            onClick={navToNextStay}
            className="border w-fit px-[70px] py-5 mt-3 rounded-xl opacity-60 cursor-pointer hover:opacity-100"
            style={{ backgroundColor: theme.palette.white.mainHover }}
          >
            <img src={Hotel} className="w-24 h-28" />
          </div>
          <div className="flex space-x-2 mt-2">
            <div className="font-bold">{nextStayTitle}</div>
            <div>({noOfTimesStay} stays)</div>
          </div>
        </div>
      )}
    </div>
  );
}
