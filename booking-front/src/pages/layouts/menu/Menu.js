import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  const navToView = () => {
    navigate("/home/menu/recently-viewed");
  };

  const navToSupp = () => {
    navigate("/home/menu/help-and-support");
  };

  const navToFavourites = () => {
    navigate("/home/menu/favourites");
  };

  const navToHome = () => {
    navigate("/home");
  };

  const navList = [
    {
      name: "Back",
      link: navToHome,
    },
    {
      name: "Recently viewed",
      link: navToView,
    },
    {
      name: "Favourites",
      link: navToFavourites,
    },
    {
      name: "Help and Support",
      link: navToSupp,
    },
  ];

  return (
    <div className="grid grid-cols-2">
      <div>
        {navList.map((item, index) => (
          <div onClick={item.link} className="cursor-pointer">
            {item.name}
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
