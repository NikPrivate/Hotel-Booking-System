import React from "react";
import MainLogo from "../../../../assets/login/main-logo.png";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Heart from "../../../../assets/home/navbar/heart.svg";
import Globe from "../../../../assets/home/navbar/globe.svg";
import User from "../../../../assets/home/navbar/user.svg";
import Menu from "../../../../assets/home/navbar/menu.svg";
import { Box } from "@mui/material";

export default function HomeNavBar({ title }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const navToFavourites = () => {
    navigate("/home/menu/favourites");
  };

  const navToHome = () => {
    navigate("/home");
  };

  const navList = [
    {
      icon: Heart,
      name: "Favourites",
      link: navToFavourites,
    },
    {
      icon: Globe,
      name: "Currency",
    },
    {
      icon: User,
      name: "Log in",
    },
    {
      icon: Menu,
      name: "Menu",
    },
  ];

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center cursor-pointer" onClick={navToHome}>
        <img src={MainLogo} className="h-8 w-8" />
        <div className="text-[28px] font-bold">{title}</div>
      </div>
      <div className="cursor-pointer flex">
        {navList.map((item, index) => (
          <Box
            key={index}
            onClick={item.link}
            className="p-5 flex items-center"
            sx={{
              backgroundColor: theme.palette.white.main,
              "&:hover": {
                backgroundColor: theme.palette.white.mainHover,
              },
            }}
          >
            <img src={item.icon} className="h-5 w-5 mr-1" />
            {item.name}
          </Box>
        ))}
      </div>
    </div>
  );
}
