import React from "react";

import Login from "../pages/auth/login/Login";
import { useRoutes } from "react-router-dom";
import Register from "../pages/auth/register/Register";
import PageNotFound from "../components/PageNotFound";

export default function RootNavigation() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return routes;
}
