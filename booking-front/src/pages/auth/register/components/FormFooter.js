import { Box, Checkbox, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormFooter({ agree }) {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleColorChange = () => {
    setClicked(!clicked);
  };

  const theme = useTheme();

  const handleNavigate = () => {
    navigate("/login");
  };

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
      <div className="mt-7">
        Have an account ?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={handleNavigate}>
          Log in
        </span>
      </div>
    </div>
  );
}
