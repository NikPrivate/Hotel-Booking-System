import React from "react";

import Login from "../pages/auth/login/Login";
import { useRoutes } from "react-router-dom";
import Register from "../pages/auth/register/Register";
import PageNotFound from "../components/PageNotFound";
import Home from "../pages/layouts/home/Home";
import Menu from "../pages/layouts/menu/Menu";
import Favourites from "../pages/layouts/favourites/Favourites";
import RecentView from "../pages/layouts/recentview/RecentView";
import HelpAndSupport from "../pages/layouts/helpandsupport/HelpAndSupport";
import NextStays from "../pages/layouts/nextstays/NextStays";

export default function RootNavigation() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
      children: [
        {
          path: "menu",
          element: <Menu />,
          children: [
            {
              path: "favourites",
              element: <Favourites />,
              children: [
                {
                  path: "next-stay",
                  element: <NextStays />,
                },
              ],
            },
            {
              path: "recently-viewed",
              element: <RecentView />,
            },
            {
              path: "help-and-support",
              element: <HelpAndSupport />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return routes;
}
