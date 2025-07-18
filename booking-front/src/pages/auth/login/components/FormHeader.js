import { useTheme } from "@emotion/react";
import MainIcon from "../../../../assets/login/main-logo.png";
import React from "react";
import GoogleSignUp from "../../../../components/GoogleSignUp";

export default function FormHeader({ title, message }) {
  const theme = useTheme();
  return (
    <div>
      <div className="flex items-center justify-center mb-5">
        <img src={MainIcon} alt="mainLogo" className="w-5 h-5 mr-[6px]" />
        <div className="text-[17px]">{title}</div>
      </div>
      <h1
        className="font-bold text-[35px]"
        style={{ color: theme.palette.PrimaryText }}
      >
        {message}
      </h1>
      <div className="flex justify-center items-center pt-7">
        <GoogleSignUp title="Login with Google" />
      </div>
      <div className="flex items-center justify-center mt-7 mb-3">
        <div className="border w-full"></div>
        <div className="text-gray-400 mx-4 mb-1">or</div>
        <div className="border w-full"></div>
      </div>
    </div>
  );
}
