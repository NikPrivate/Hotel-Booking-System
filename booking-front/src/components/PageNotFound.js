import React from "react";
import pageNotFound from "../../src/assets/pageNotFound/PageNotFound.png";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const theme = useTheme();
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <img src={pageNotFound} className="h-96 w-96" />
      <div className="space-y-6">
        <h1 className="font-bold text-6xl">Oops!</h1>
        <div className="text-xl text-gray-500">
          <p>We couldn't find the page</p>
          <p>you were looking for</p>
        </div>
        <Box
          onClick={backToHome}
          sx={{
            backgroundColor: theme.palette.black.main,
            color: theme.palette.white.main,
            "&:hover": {
              backgroundColor: theme.palette.black.mainHover,
            },
          }}
          className="w-fit text-sm py-2 px-4 rounded-full cursor-pointer flex items-center justify-center"
        >
          <FaArrowLeft className="mr-2" />
          Go home
        </Box>
      </div>
    </div>
  );
}
