import React from "react";
import HomeNavBar from "./components/HomeNavBar";
import { useTheme } from "@mui/material/styles";
import { Outlet, useLocation } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecentlyViewed from "./components/RecentlyViewed";
import HotelDeals from "./components/HotelDeals";

export default function Home() {
  const theme = useTheme();
  const location = useLocation();

  const isHomeRoute = location.pathname.endsWith("home");

  return (
    <div>
      <HomeNavBar title="InnSeeker" />
      {isHomeRoute ? (
        <div>
          <SearchBar
            className="!pt-[60px] px-[250px]"
            style={{ backgroundColor: theme.palette.white.mainHover }}
            heading="Save up to 55% on your next hotel stay"
            comments="We compare hotel prices from over 100 sites"
          />
          <RecentlyViewed
            title="Recently Viewed"
            view="View all"
            className="px-[250px] !pt-[20px]"
          />
          <HotelDeals
            title="Hot Hotel deals right now"
            view="See more deals"
            className="px-[250px] !pt-[60px]"
          />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
