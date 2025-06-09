import React from "react";
import HomeNavBar from "./components/HomeNavBar";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

export default function Home() {
  const theme = useTheme();
  return (
    <div className="px-[250px]">
      <HomeNavBar title="InnSeeker" />
      <Outlet />
    </div>
  );
}
