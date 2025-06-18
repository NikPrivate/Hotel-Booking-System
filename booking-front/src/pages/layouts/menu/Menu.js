import React from "react";
import { useTheme } from "@mui/material/styles";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Heart from "../../../assets/home/navbar/heart.svg";
import ArrowBack from "../../../assets/arrow-back.svg";
import QuestionMark from "../../../assets/question-mark.svg";
import Time from "../../../assets/time.svg";
import { Box } from "@mui/material";

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const isNextStayRoute = location.pathname.endsWith("next-stay");

  const navToView = () => {
    navigate("/home/menu/recently-viewed");
  };

  const navToSupp = () => {
    navigate("/home/menu/help-and-support");
  };

  const navToFavourites = () => {
    navigate("/home/menu/favourites");
  };

  const navToNextStay = () => {
    navigate("/home/menu/favourites/next-stay");
  };

  const navToHome = () => {
    navigate("/home");
  };

  const navList = [
    {
      name: "Back",
      icon: ArrowBack,
      link: isNextStayRoute ? navToFavourites : navToHome,
    },
    {
      name: "Recently viewed",
      icon: Time,
      link: navToView,
    },
    {
      name: "Favourites",
      icon: Heart,
      link: navToFavourites,
    },
    ...(isNextStayRoute
      ? [
          {
            name: "Your next stay",
            icon: null,
            link: navToNextStay,
          },
        ]
      : []),
    {
      name: "Help and Support",
      icon: QuestionMark,
      link: navToSupp,
    },
  ];

  return (
    <div className="grid grid-cols-4 mt-10 px-[250px]">
      {}
      <div className="col-span-1">
        {navList.map((item, index) => (
          <Box
            index={index}
            onClick={item.link}
            className="cursor-pointer flex items-center px-4 py-6 rounded-md w-52"
            sx={{
              backgroundColor: theme.palette.white.main,
              "&:hover": {
                backgroundColor: theme.palette.white.mainHover,
              },
            }}
          >
            {item.icon && <img src={item.icon} className="h-5 w-5 mr-4" />}
            {!item.icon && <div className="mr-[28px]" />}
            {item.name}
          </Box>
        ))}
      </div>
      <div className="col-span-3">
        <Outlet />
      </div>
    </div>
  );
}
