import { Box, Checkbox, useTheme } from "@mui/material";
import React, { useState } from "react";

export default function FormFooter({ agree }) {
  const [clicked, setClicked] = useState(false);

  const handleColorChange = () => {
    setClicked(!clicked);
  };

  const theme = useTheme();

  return (
    <div>
      <div className="flex items-center justify-start mt-2 ml-[-10px]">
        <Checkbox onClick={handleColorChange} />
        <p
          className={` xl:text-base text-sm ${
            clicked ? "text-black" : "text-gray-400"
          }`}
        >
          I agree to all{" "}
          <span className={`${clicked ? "text-blue-500" : "text-blue-300"}`}>
            Term, Privacy Policy
          </span>{" "}
          and{" "}
          <span className={`${clicked ? "text-blue-500" : "text-blue-300"}`}>
            Fees
          </span>
          .
        </p>
      </div>
      <Box
        className="border w-full py-[6px] rounded-md mt-7 cursor-pointer text-center"
        sx={{
          backgroundColor: theme.palette.button.primary,
          color: theme.palette.white.main,
          "&:hover": {
            backgroundColor: theme.palette.button.primaryHover,
          },
        }}
      >
        Sign Up
      </Box>
      <div className="mt-7">
        Have an account ?{" "}
        <span className="text-blue-500 cursor-pointer">Log in</span>
      </div>
    </div>
  );
}
